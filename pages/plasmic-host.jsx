import * as React from 'react';
import { PlasmicCanvasContext, PlasmicCanvasHost, registerComponent, registerGlobalContext } from '@plasmicapp/react-web/lib/host';

//custom components
import { SupabaseUser } from '../components/SupabaseUserProvider';
import { SupabaseProvider } from '../components/SupabaseProvider';


registerGlobalContext(SupabaseUser, {
    name: "SupabaseUserGlobalContext",
    props: {
        defaultRedirectOnLoginSuccess: "string",
    },
    providesData: true,
    globalActions: {
      login: {
        parameters: [
        {
            name: "email",
            type: "string",
        },
        {
            name: "password",
            type: "string",
        },
        {
            name:"successRedirect",
            type: "string"
        }
        ],
      },
      signup: {
        parameters: [
        {
            name: "email",
            type: "string",
        },
        {
            name: "password",
            type: "string",
        },
        {
            name:"successRedirect",
            type: "string"
        }
        ],
      },
      logout: {
        parameters: [
        {
            name:"successRedirect",
            type: "string"
        }
        ]
      },
      resetPasswordForEmail: {
        parameters: [
        {
          name: "email",
          type: "string",
        },
        ],
      },
      updateUserPassword: {
        parameters: [
        {
          name: "password",
          type: "string",
        },
        ],
      },
    },
    importPath: "./components/SupabaseUserProvider",
    isDefaultExport: false,
    importName: "SupabaseUser",
});

registerComponent(SupabaseProvider, {
  name: "SupabaseProvider",
  providesData: true,
  props: {
    queryName: {
      type: "string",
      required: true,
    },
    tableName: {
      type: "string",
      required: true,
    },
    columns: {
      type: "string",
      defaultValue: "*",
    },
    filters: {
      type: "array",
      itemType: {
        type: "object",
        fields: {
          fieldName: "string",
          operator: {
            type: "choice",
            options: [
              {
                value: "eq",
                label: "is equal to (eq)"
              },
              {
                value: "neq",
                label: "not equal to (neq)"
              },
              {
                value: "gt",
                label: "greater than (gt)"
              },
              {
                value: "gte",
                label: "greater than or equal to (gte)"
              },
              {
                value: "lt",
                label: "less than (lt)"
              },
              {
                value: "lte",
                label: "less than or equal to (lte)"
              },
              {
                value: "like",
                label: "matches a case-sensitive pattern (like)"
              },
              {
                value: "ilike",
                label: "matches a case-insensitive pattern (ilike)"
              },
              {
                value: "is",
                label: "is (is)"
              },
              {
                value: "in",
                label: "is in an array (in)"
              },
              {
                value: "contains",
                label: "contains every element in (contains)"
              },
              {
                value: "containedby",
                label: "contained by (containedby)"
              },
              {
                value: "rangeGt",
                label: "greater than range (rangeGt)"
              },
              {
                value: "rangeGte",
                label: "greater than or equal to range (rangeGte)"
              },
              {
                value: "rangeLt",
                label: "less than range (rangeLt)"
              },
              {
                value: "rangeLte",
                label: "less than or equal to range (rangeLte)"
              },
              {
                value: "rangeAdjacent",
                label: "is mutually exclusive to range (rangeAdjacent)"
              },
              {
                value: "overlaps",
                label: "has an element in common with (overlaps)"
              },
              {
                value: "match",
                label: "where each { column:value, ... } matches (match)"
              },
              {
                value: "or",
                label: "that matches at least one PostgREST filter (or)"
              },
              {
                value: "textSearch",
                label: "matches the query string (textSearch)"
              },
              {
                value: "not",
                label: "that doesn't match the PostgREST filter (not)"
              },
            ]
          },
          value: "string",
          value2: "string",
        },
      },
      description:
        "Filters to execute during the query. Acceptable values are eq, neq, gt, lt, gte, lte.",
    },
    initialSortField: "string",
    initialSortDirection: {
      type: "choice",
      options: ["asc", "desc"],
    },
    uniqueIdentifierField: {
      type: "string",
      required: true,
      defaultValue: "id",
    },
    hideDefaultErrors: {
      type: 'boolean',
      advanced: true,
      description: 'Hide default errors so you can use the $ctx values yourself to show custom error messages'
    },
    forceLoading: {
      type: "boolean",
      advanced: true,
    },
    forceValidating: {
      type: "boolean",
      advanced: true,
    },
    forceNoData: {
      type: "boolean",
      advanced: true,
    },
    forceQueryError: {
      type: "boolean",
      advanced: true,
    },
    forceMutationError: {
      type: "boolean",
      advanced: true,
    },
    generateRandomErrors: {
      type: "boolean",
      advanced: true,
    },
    loading: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Loading...",
      },
    },
    validating: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Validating...",
      },
    },
    noData: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "No data",
      },
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value:
            `INSTRUCTIONS FOR SUPABASE PROVIDER:
            1. Click the new SupabaseProvider component in the Component tree (LHS of screen) to open it's settings
            2. In settings on RHS of screen, choose a globally unique "Query name" (eg "/pagename/staff")
            3. Enter the correct "table name" from Supabase (eg "staff")
            4. On LHS of screen, change the name of SupabaseProvider to match the query name
            5. Delete this placeholder text (from "children" slot). Then add components to "children" and use the dynamic data as you wish! :)`,
        },
      ],
    },
  },
  refActions: {
    sortRows: {
      description: "sort rows",
      argTypes: [
        { name: "sortField", type: "string" },
        { name: "sortDirection", type: "string" },
      ],
    },
    refetchData: {
      description: "refetch rows from the database",
      argTypes: [],
    },

    deleteRow: {
      description: "delete a row by ID",
      argTypes: [{ name: "ID", type: "string", displayName: "Id / unique identifier of the row to delete" }],
    },
    addRow: {
      description: "add a row",
      argTypes: [
        { name: "rowForSupabase", type: "object", displayName: "Row object to send to Supabase" },
        { name: "optimisticRow", type: "object", displayName: "Optimistic new row object (optional)"},
      ],
    },
    editRow: {
      description: "edit row",
      argTypes: [
        { name: "rowForSupabase", type: "object", displayName: "Row object to send to Supabase"},
        { name: "optimisticRow", type: "object", displayName: "Optimistic edited row object (optional)"},
      ],
    },
    runRpc: {
      description: 'RPC for add row',
      argTypes: [
        { name: "rpcName", displayName: 'Name of the RPC', type: "string" },
        { name: "dataForSupabase", displayName: 'Data for Supabase API call', type: "object"},
        { name: "optimisticData", displayName: 'Data for optimistic operation (optional)', type: 'object'},
        { 
          //Choose the optimistic operation to perform
          //Done in plain text since "choice" type doesn't work in refActions
          name: "optimisticOperation", 
          displayName: 'Optimistic operation (addRow / editRow / deleteRow / replaceData) (optional)', 
          type: "string" 
        },
      ]
    },
    clearError: {
      description: "clear the latest error message",
      argTypes: [],
    },
  },
  importPath: "./components/SupabaseProvider",
  isDefaultExport: false,
  importName: "SupabaseProvider"
});

/*registerComponent(SupabaseStorageProvider, {
  name: "SupabaseStorageProvider",
  providesData: true,
  props: {
    instanceName: {
      type: "string",
      required: true,
    }
  },
  refActions {
    uploadFile: {
      description: "Upload a file",
      argTypes: [
        { name: "fileToUpload"}
      ]
    }
  }
})*/

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}

/*
registerComponent(ProductCard, {
  name: "ProductCard",
  props: {
    // Pass in arbitrary content in the visual editing canvas
    children: 'slot',
    
    // You can have any number of slots.
    header: 'slot',
    
    // Simple scalar props
    productId: 'string',
    darkMode: 'boolean',
    
    // Some props can take an enum of options
    elevation: {
      type: 'choice',
      options: ['high', 'medium', 'flat']
    }
    
    // Some props can take an arbitrary JSON object
    config: 'object',
    
    // Some props can have dynamic configurations
    headerColor: {
      type: 'choice',
      
      // Hide the 'color' prop if no header content
      hidden: (props) => !props.header,
      
      // Offer different choices depending on if darkMode is on
      options: (props) => props.darkMode ? ['black', 'blue'] : ['yellow', 'green']
    }
  },
  
  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/ProductCard',
});
*/