import { DataProvider } from "@plasmicapp/react-web/lib/host"
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import createClient from '@/utils/supabase/component';
import { decode } from "base64-arraybuffer";
import getErrMsg from "@/utils/getErrMsg";


export const TestDataProvider = forwardRef(function TestDataProvider(props, ref) {
    const { children, className, instanceName, bucketName } = props;

    // setup state
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
   

    // DEFINE FUNCTIONS TO HANDLE SUPABASE STORAGE API CALLS TO BE USED IN ELEMENT ACTIONS

    const uploadFile = useCallback( 
        async (
            path, 
            base64FileData, 
            upsert
        ) => {

            const supabase = createClient(); // establish the Supabase client
                        
            const { data, error } = await supabase
            .storage
            .from(bucketName)
            .upload(
                path, 
                decode(base64FileData), 
                {
                    upsert: upsert
                }
            )
            if (error) {
                throw error;
            }
            setData(data)
        },
        [data, bucketName]
    );

    useImperativeHandle(
        ref,
        () => {
            return {
                uploadFile: async (path, base64FileData, upsert) => {
                    setIsLoading(true)
                    setData(null)
                    setError(null)
                    uploadFile (path, base64FileData, upsert)
                    .catch((err) => setError(getErrMsg(err)))
                    .finally(() => {
                        setIsLoading(false)
                    })
                }
            };
        }
    );

    return (
      <div className={className}>
        <DataProvider name={ instanceName } data={{
            data: data,
            error: error,
            isLoading: isLoading
        }}>
          {children}
        </DataProvider>
      </div>
    );
  });