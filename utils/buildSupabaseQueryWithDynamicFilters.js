import {
  supabaseJsFilterOperators_oneArg,
  supabaseJsFilterOperators_twoArg,
  supabaseJsFilterOperators_threeArg,
} from "../types/supabase-js-filter-ops";

const buildSupabaseQueryWithDynamicFilters = ({
  supabase,
  tableName,
  columns,
  filters,
}) => {
  //Build the query with dynamic filters passed as props to the component
  //The basic query
  const supabaseQuery = supabase.from(tableName).select(columns);

  //The dynamic filters if present
  if (filters && filters.length > 0) {
    filters.forEach((filter) => {
      if (supabaseJsFilterOperators_oneArg.includes(filter.operator)) {
        const operator = filter.operator;
        supabaseQuery[operator](filter.fieldName);
      } else if (supabaseJsFilterOperators_twoArg.includes(filter.operator)) {
        const operator = filter.operator;
        //Typescript ignore next line because it doesn't like the dynamic operator and no benefit for enforcing safety
        // @ts-ignore-next-line
        supabaseQuery[operator](filter.fieldName, filter.value);
      } else if (supabaseJsFilterOperators_threeArg.includes(filter.operator)) {
        const operator = filter.operator;
        //Typescript ignore next line because it doesn't like the dynamic operator and no benefit for enforcing safety
        // @ts-ignore-next-line
        supabaseQuery[operator](filter.fieldName, filter.value, filter.value2);
      } else {
        throw new Error("Invalid filter operator");
      }
    });
  }

  return supabaseQuery;
}

export default buildSupabaseQueryWithDynamicFilters;