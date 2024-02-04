import * as React from 'react';
import { PlasmicCanvasHost, registerComponent, registerGlobalContext } from '@plasmicapp/react-web/lib/host';
import { SupabaseUser } from "../components/SupabaseUserProvider.tsx";

registerGlobalContext(SupabaseUser, {
    name: "SupabaseUserGlobalContext",
    props: {
        redirectOnLoginSuccess: "string",
        simulateLoggedInUser: "boolean",
        email: "string",
        password: "string",
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
        ],
      },
      logout: {
          parameters: []
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