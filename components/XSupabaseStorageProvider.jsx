import {
    useState,
    useEffect,
    forwardRef, 
    useCallback,
    useImperativeHandle,
} from "react"
import { DataProvider } from "@plasmicapp/react-web/lib/host";
import useSWR from "swr";
import createClient from "@/utils/supabase/component";
import { decode } from "base64-arraybuffer";
import { create } from "domain";
import getErrMsg from "../utils/getErrMsg";

// Define the SupabaseStorageProvider component
export const SupabaseStorageProvider = forwardRef(
  function SupasbaseStorageProvider( props, ref ) {
        const {
            className,
            instanceName,
            bucketName,
            children
        } = props;

        // Setup state
        //string version of the raw error object from SWR
        const [fetcherError, setFetcherError] = useState(null);

        //Error resulting from a mutation as opposed to SWR fetcher
        const [mutationError, setMutationError] = useState(null);

        // Function that can be called to fetch data
        const fetchData = useCallback(async () => {
            //New client
            const supabase = createClient();
            const supabaseQuery = supabase.storage.getBucket(bucketName);

            // Execute the query
            const { data, error } = await supabaseQuery;
            if (error) {
                throw error;
            }
            return data;
        }, [bucketName]);

        // Fetch data using SWR
        const {
            data: fetchedData,
            error: rawFetcherErr,
            mutate,
            isValidating,
        } = useSWR(`/${instanceName}`, fetchData, {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            shouldRetryOnError: false,
        });

        // When bucketName changes, refetch data
        useEffect(() => {
            mutate().catch((err) => setMutationError(getErrMsg(err)));
        }, [bucketName, mutate])
        

        /* FUNCTIONS TO HANDLE SUPABASE STORAGE API CALLS */

        // Function to upload a file to Supabase storage
        const uploadFile = useCallback(
            async (
                path,
                base64FileData,
                cacheControl,
                upsert
            ) => {

                // Upload the file to Supabase storage
                const supabase = createClient();
                const { error } = await supabase
                .storage
                .from(bucketName)
                .upload(path, decode(base64FileData), {
                    cacheControl: cacheControl,
                    upsert: upsert
                })
                if (error) throw error;
                return;
            }, // TBC if there is any state to watch for updates
        )

        /* ELEMENT ACTIONS WHICH CAN BE CALLED FROM PLASMIC STUDIO COMPONENT REGISTRATION */
        useImperativeHandle(ref, () => ({

            //Element action to upload a file to Supabase storage
            uploadFile: async ( path, base64FileData, cacheControl, upsert ) => {
                setMutationError(null)
                
                // Run the mutation
                mutate(uploadFile(path, base64FileData, cacheControl, upsert), {
                    populateCache: true
                }).catch((err) => setMutationError(getErrMsg(err)));
                
            },
        }))
        
        // Render the component
        return (
            <div className = { className }>
                <DataProvider
                    name = { "SupabaseStorageProvider" } 
                >
                    { children }
                </DataProvider>
            </div>
        )
    }
);