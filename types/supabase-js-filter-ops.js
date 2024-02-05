//Appropriate filter operations in supabase-js, manually written from the docs

export const supabaseJsFilterOperators_oneArg = [
    'or',
  ];
    
  export const supabaseJsFilterOperators_twoArg = [
    'eq',
    'neq',
    'gt',
    'lt',
    'gte',
    'lte',
    'is',
    //Other
    'like',
    'ilike',
    'in',//Array
    'contains',
    'containedBy',
    'rangeGt',
    'rangeGte',
    'rangeLt',
    'rangeLte',
    'rangeAdjacent',
    'overlaps',
    'match',//??
  ];
  
  export const supabaseJsFilterOperators_threeArg = [
    'textSearch',
    'not',
    // 'filter'
  ];

  
  export const supabaseJsFilterOperators_all = [
    ...supabaseJsFilterOperators_oneArg,
    ...supabaseJsFilterOperators_twoArg,
    ...supabaseJsFilterOperators_threeArg
  ]
  
  
  