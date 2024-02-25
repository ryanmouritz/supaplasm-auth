import { DataProvider } from "@plasmicapp/react-web/lib/host"

export function TestDataProvider(props) {
    const { children, className, productSlug } = props;
  
    // Some hook that you've defined for fetching product data by slug
    const data = { 
        details: {
            name: "Example Product",
            description: "An example product to see if Data Provider is working.",
            price: 98.99
        } /*comment/uncomment to simulate data */,
        error: null
        };

    return (
      <div className={className}>
        {
          // Make this data available to this subtree via context,
          // with the name "product"
        }
        <DataProvider name="product" data={{
            details: data.details,
            error: data.error,
            isLoading: !data.details && !data.error
        }}>
          {children}
        </DataProvider>
      </div>
    );
  };