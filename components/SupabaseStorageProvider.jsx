import {
    forwardRef, 
    useImperativeHandle,
    useCallback,
    useState
} from 'react';
import createClient from '../utils/supabase/component';
import { DataProvider } from '@plasmicapp/react-web/lib/host';
import { decode } from "base64-arraybuffer"
import getErrMsg from '../utils/getErrMsg';

// Define the SupabaseStorageProvider component
export const SupabaseStorageProvider = forwardRef(
    function SupabaseStorageProvider( props, ref ) {
        const {
            className,
            instanceName,
            bucketName,
            children
        } = props;

        // Setup state
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);

        /* FUNCTIONS TO HANDLE SUPABASE STORAGE API CALLS */

        // Function to upload a file to Supabase storage
        const uploadFile = useCallback(
            async (
                path,
                base64FileData,
                upsert
            ) => {

                // Upload the file to Supabase storage
                const supabase = createClient();
                const { data, error } = await supabase
                .storage
                .from(bucketName)
                .upload(path, decode(base64FileData), {
                    upsert: upsert
                })
                if (error) setError(getErrMsg(error));
                setData(data)
                console.log(data)
                return data;
            }, [bucketName]
        )

        /* ELEMENT ACTIONS WHICH CAN BE CALLED FROM PLASMIC STUDIO COMPONENT REGISTRATION */
        useImperativeHandle(ref, () => ({
            uploadFile: async ( path, base64FileData, upsert) => {
                uploadFile(path, base64FileData, upsert)
            },
        }));

        // Render the component
        return (
            <div className = { className }>
                <DataProvider
                    name = { instanceName || "SupabaseStorageProvider" }
                    data = {{
                        data: data,
                        isLoading: (!data && !error)
                    }}
                >
                    {/*Error state - error is currently there according to mutation*/}
                    {error && (
                        <p>Error: {error}</p>
                    )}
                    
                    {/*Render children with data provider - when we have data*/}
                    {(data || !bucketName) && children}
                </DataProvider>
            </div>
        )
    });