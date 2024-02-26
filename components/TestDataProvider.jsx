import { DataProvider } from "@plasmicapp/react-web/lib/host"
import { forwardRef, useImperativeHandle, useState } from "react";
import createClient from '@/utils/supabase/component';
import { decode } from "base64-arraybuffer";


export const TestDataProvider = forwardRef(function TestDataProvider(props, ref) {
    const { children, className, instanceName, bucketName } = props;

    // setup state
    const [count, setCount] = useState(0);
    const [response, setResponse] = useState(null);

    // some data to simulate a response from a query
    const data = { 
        details: {
            instanceName: instanceName,
            bucketName: bucketName
        } /* comment/uncomment to simulate data */,
        error: null
        };
    
    useImperativeHandle(
        ref,
        () => {
            return {
                increment() {
                    setCount((count) => count + 1);
                },
                async uploadFile() {
                    const supabase = createClient();
                    const { data } = await supabase // make this async once working
                    .storage
                    .from(bucketName)
                    .upload(
                        "testPath/testName", 
                        decode("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"), 
                        {
                            upsert: "true"
                        }
                    ) // replace the hard coded base64 encoded image with the input prop 
                    console.log(data)
                    setResponse(data) //handle errors also once working. also add loading state
                }
            };
        }, [setCount, setResponse]
    );

    return (
      <div className={className}>
        {
          // Make this data available to this subtree via context,
          // with the name "product"
        }
        <DataProvider name={ instanceName } data={{
            details: data.details,
            count: count,
            response: response,
            error: data.error,
            isLoading: !data.details && !data.error
        }}>
          {children}
        </DataProvider>
      </div>
    );
  });