import {
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
    useCallback,
  } from "react";
  import { DataProvider, useDataEnv } from '@plasmicapp/host';
  import useSWR from "swr";
  import { createClient } from "../utils/supabase/component"
  import getSortFunc from "../utils/getSortFunc";
  import buildSupabaseQueryWithDynamicFilters from "../utils/buildSupabaseQueryWithDynamicFilters";
  import getErrMsg from "../utils/getErrMsg";  
  
  //Define the Supabase provider component
  export const SupabaseProvider = forwardRef(
    function SupabaseProvider(props, ref) {
      const {
        //All avialable props destructured
        queryName,
        tableName,
        columns,
        filters,
        uniqueIdentifierField,
        hideDefaultErrors,
        placeholdersForOptimisticAdd,
        children,
        loading,
        validating,
        noData,
        forceNoData,
        forceQueryError,
        forceMutationError,
        forceLoading,
        forceValidating,
        generateRandomErrors,
        initialSortField,
        initialSortDirection,
      } = props;
  
      //Get global context value simulateUserSettings from Plasmic Studio (as entered by user)
      //This helps us initialise supabase with a simulated logged in user when viewing pages in the Studio or Preview
      //Because iframe rendered app (in studio) can't access localStorage or Cookies when auth tokens are stored
      const dataEnv = useDataEnv();
      const simulateUserSettings = dataEnv?.SupabaseUser.simulateUserSettings;
  
      //Setup state
      const [data, setData] = useState(null);
      const [sortedData, setSortedData] = useState(null);
      const [sortField, setSortField] = useState(initialSortField);
      const [sortDirection, setSortDirection] =
        useState(initialSortDirection);
  
      //string version of the raw error object from SWR
      const [fetcherError, setFetcherError] = useState(null);
  
      //Error resulting from a mutation as opposed to SWR fetcher
      const [mutationError, setMutationError] = useState(null);
  
      //When data or sorting changes, set sortedData
      //This works better with opsimistic updates than directly sorting data in query / mutation functions
      //Because the user may change sort order partway through async query/mutation causes glitches
      //This takes care of sort automatically whenever data or sort changes, making it smooth & easy
      useEffect(() => {
        if (data) {
          const newData = [...data];
          newData.sort(getSortFunc(sortField, sortDirection));
          setSortedData(newData);
        }
      }, [data, sortField, sortDirection]);
  
      //Function that can be called to fetch data
      const fetchData = useCallback(async () => {
        //New client
        const supabase = await createClient(simulateUserSettings);
  
        //Build the query with dynamic filters that were passed as props to the component
        const supabaseQuery = buildSupabaseQueryWithDynamicFilters({
          supabase,
          tableName,
          columns,
          filters,
        });
  
        //Execute the query
        const { data, error } = await supabaseQuery;
        if (error) {
          throw error;
        }
        return data;
      }, [simulateUserSettings, tableName, columns, filters]);
  
      //Fetch data using SWR
      const {
        data: fetchedData,
        error: rawFetcherErr,
        mutate,
        isValidating,
      } = useSWR(`/${queryName}`, fetchData, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
      });
  
      //When tableName changes, refetch data
      useEffect(() => {
        mutate().catch((err) => setMutationError(getErrMsg(err)));
      }, [tableName, mutate]);
  
      //When data changes, set data
      //In turn this will cause change to sortedData
      useEffect(() => {
        if (fetchedData) {
          setData(fetchedData);
        }
      }, [fetchedData]);
  
      //When error changes from SWR, set fetcherError
      useEffect(() => {
        if (rawFetcherErr) {
          setFetcherError(getErrMsg(rawFetcherErr));
        } else {
          setFetcherError(null);
        }
      }, [rawFetcherErr]);
  
      //When forceQueryError changes, set fetcherEror
      useEffect(() => {
        if (forceQueryError) {
          setFetcherError('Simulated query error!');
        } else {
          setFetcherError(null);
        }
      }, [forceQueryError]);
  
      //When forceMutationError changes, set mutationError
      useEffect(() => {
        if (forceMutationError) {
          setMutationError('Simulated mutation error!');
        } else {
          setMutationError(null);
        }
      }, [forceMutationError]);
  
      //Define functions to add, edit and delete row
      const addRowOptimistically = useCallback(
        (data, row) => {
          //Convert array of placeholders in format of {fieldName, value} to object {fieldName: value}
          const extraData = placeholdersForOptimisticAdd?.reduce((acc, curr) => {
            return { ...acc, [curr.fieldName]: curr.value };
          }, {});
          const opsimisticRow = { ...row, ...extraData };
          const newData = [...(data || []), opsimisticRow];
          return newData;
        },
        [placeholdersForOptimisticAdd]
      );
  
      const addRow = useCallback(
        async (row) => {
          if (generateRandomErrors && Math.random() > 0.5)
            throw new Error("Randomly generated error on addRow");
          const supabase = await createClient(simulateUserSettings);
          const { error } = await supabase.from(tableName).insert(row);
          if (error) throw error;
          return addRowOptimistically(data, row);
        },
        [
          simulateUserSettings,
          data,
          generateRandomErrors,
          addRowOptimistically,
          tableName,
        ]
      );
  
      const editRowOptimistically = useCallback(
        (data, row) => {
          const newData =
            data?.map((existingRow) => {
              if (
                row[uniqueIdentifierField] === existingRow[uniqueIdentifierField]
              ) {
                return row;
              }
              return existingRow;
            }) || [];
          return newData;
        },
        [uniqueIdentifierField]
      );
  
      const editRow = useCallback(
        async (row) => {
          if (generateRandomErrors && Math.random() > 0.5)
            throw new Error("Randomly generated error on editRow");
          const supabase = await createClient(simulateUserSettings);
          const { error } = await supabase
            .from(tableName)
            .update(row)
            .eq(uniqueIdentifierField, row[uniqueIdentifierField]);
          if (error) throw error;
          return editRowOptimistically(data, row);
        },
        [
          simulateUserSettings,
          data,
          generateRandomErrors,
          editRowOptimistically,
          tableName,
          uniqueIdentifierField,
        ]
      );
  
      const deleteRowOptimistically = useCallback(
        (data, uniqueIdentifierVal) => {
          const newData = data?.filter(
            (row) => row[uniqueIdentifierField] !== uniqueIdentifierVal
          );
          if (!newData) return null;
          return newData;
        },
        [uniqueIdentifierField]
      );
  
      const deleteRow = useCallback(
        async (uniqueIdentifierVal) => {
          if (generateRandomErrors && Math.random() > 0.5)
            throw new Error("Randomly generated error on deleteRow");
          const supabase = await createClient(simulateUserSettings);
          const { error } = await supabase
            .from(tableName)
            .delete()
            .eq(uniqueIdentifierField, uniqueIdentifierVal);
          if (error) throw error;
          return deleteRowOptimistically(data, uniqueIdentifierVal);
          //use-swr will now revalidate data so no need to refetch single one here
        },
        [
          simulateUserSettings,
          data,
          generateRandomErrors,
          tableName,
          uniqueIdentifierField,
          deleteRowOptimistically,
        ]
      );
  
      //Define element actions which can be called outside this component in Plasmic Studio
      //Note the opsimistic updates
      useImperativeHandle(ref, () => ({
        sortRows: async (sortField, sortDirection) => {
          setSortField(sortField);
          setSortDirection(sortDirection);
        },
        refetchRows: async () => {
          mutate().catch((err) => setMutationError(getErrMsg(err)));
        },
        deleteRow: async (uniqueIdentifierVal) => {
          mutate(deleteRow(uniqueIdentifierVal), {
            populateCache: true,
            optimisticData: deleteRowOptimistically(data, uniqueIdentifierVal),
          }).catch((err) => setMutationError(getErrMsg(err)));
        },
        addRow: async (row) => {
          mutate(addRow(row), {
            populateCache: true,
            optimisticData: addRowOptimistically(data, row),
          }).catch((err) => setMutationError(getErrMsg(err)));
        },
        editRow: async (row) => {
          mutate(editRow(row), {
            populateCache: true,
            optimisticData: editRowOptimistically(data, row),
          }).catch((err) => setMutationError(getErrMsg(err)));
        },
        clearError: () => {
          setMutationError(null);
        },
      }));
  
      //Render the component
      return (
        <DataProvider
          name={queryName || "SupabaseProvider"}
          data={{
            isLoading: (isValidating && !fetchedData) || forceLoading,
            isValidating: isValidating || forceValidating,
            mutationError,
            fetcherError,
            data: forceNoData ? null : sortedData,
            sort: {
              field: sortField,
              direction: sortDirection,
            },
          }}
        >
          {/*Loading state - validating before we initially have data*/}
          {((isValidating && !fetchedData) || forceLoading) &&
            loading}
  
          {/*Validating state - any time we are running mutate() to revalidate cache*/}
          {(isValidating || forceValidating) && validating}
  
          {/*No data state*/}
          {(!data || data.length === 0 || forceNoData) && noData}
  
          {/*Error state - error is currently there according to SWR*/}
          {(fetcherError && !hideDefaultErrors) && <p>Error from fetching records: {fetcherError}</p>}
  
          {/*Error state - error is currently there according to mutation*/}
          {(mutationError && !hideDefaultErrors) && <p>Error from mutation: {mutationError}</p>}
  
          {/*Render children with data provider - when we have data*/}
          {(data || !tableName) && children}
        </DataProvider>
      );
    }
  );