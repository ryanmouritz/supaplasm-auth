import { DataProvider } from "@plasmicapp/react-web/lib/host"
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import createClient from '@/utils/supabase/component';
import { decode } from "base64-arraybuffer";
import getErrMsg from "@/utils/getErrMsg";
import { v4 as uuidv4 } from 'uuid';

export const SupabaseStorageProvider = forwardRef(function TestDataProvider(props, ref) {
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
            contentType,
            upsert
        ) => {

            const supabase = createClient(); // establish the Supabase client
            
            let options = Object.assign({},
                contentType && { contentType: contentType }, //currently, we let the client specify the MIME-type. As it stands, if the client is manipulated, a user could upload a different file type to the MIME type they specify, circumventing Supabase file type restrictions. In future, it is suggested to derive the MIME-type in the backend.
                upsert && { upsert: upsert }
            )

            const { data, error } = await supabase
            .storage
            .from(bucketName)
            .upload(
                path, 
                decode(base64FileData), 
                options
            )
            if (error) {
                throw error;
            }
            setData(data)
        },
        [data, bucketName]
    );

    const uploadManyFiles = useCallback(
        async (
            fileDataList,
            folder,
            upsert,
            replaceFilename
        ) => {
            const supabase = createClient();
            const uploadResults = [];
    
            for (const file of fileDataList) {
                let path = folder + "/" + (replaceFilename ? uuidv4() : file.name);
                let resultItem = {
                    input: { filename: file.name },
                    target: {
                        path: path,
                        type: file.type
                    },
                    result: {
                        status: "",
                        data: null,
                        error: null
                    }
                };
                
                let options = Object.assign({},
                    file.type && { contentType: file.type },
                    upsert && { upsert: upsert }
                )

                try {
                    const { data, error } = await supabase
                        .storage
                        .from(bucketName)
                        .upload(
                            path,
                            decode(file.contents),
                            options
                        );
                    if (error) throw new Error(getErrMsg(error))

                    resultItem.result.status = "success";
                    resultItem.result.data = data;
                } catch (err) {
                    resultItem.result.status = "error";
                    resultItem.result.error = getErrMsg(error || err);
                }
    
                uploadResults.push(resultItem);
            }
            setData(uploadResults);
        },
        [data, bucketName]
    );

    // Download a file
    // Downloads a file from a private bucket. For public buckets, make a request to the URL returned from getPublicUrl instead.
    const downloadFile = useCallback( 
        async (
            path, 
            optimization,
        ) => {

            const supabase = createClient(); // establish the Supabase client

            const format = optimization ? null : "origin"; // Specify the format of the image requested. When using 'origin' we force the format to be the same as the original image. When this option is not passed in, images are optimized to modern image formats like Webp.

            let transform = Object.assign({},
                format && { format: format }
            )

            let options = Object.assign({},
                transform &&
                Object.keys(transform).length !== 0 &&
                transform.constructor === Object && 
                { transform: transform }
            )
            
            console.log(JSON.stringify(options))

            let filename = path.includes("/") ? path.substring(path.lastIndexOf('/') + 1) : path

            const { data, error } = await supabase
            .storage
            .from(bucketName)
            .download(
                path, options
            )
            if (error) {
                throw error;
            }

            setData(data) 
                 
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
                var url = window.URL.createObjectURL(data);
                a.href = url;
                a.download = filename;
                a.click();
                window.URL.revokeObjectURL(url); 
        },
        [data, bucketName]
    );
    
    // Replace an existing file
    // Replaces an existing file at the specified path with a new one.
    const replaceFile = useCallback( 
        async (
            path, 
            base64FileData,
            contentType, 
            upsert
        ) => {

            const supabase = createClient(); // establish the Supabase client

            let options = Object.assign({},
                contentType && { contentType: contentType },
                upsert && { upsert: upsert }
            )
                        
            const { data, error } = await supabase
            .storage
            .from(bucketName)
            .update(
                path, 
                decode(base64FileData), 
                options
            )
            if (error) {
                throw error;
            }
            setData(data)
        },
        [data, bucketName]
    );

    // Move an existing file
    // Moves an existing file to a new path in the same bucket.
    const moveFile = useCallback( 
        async (
            fromPath, 
            toPath
        ) => {

            const supabase = createClient(); // establish the Supabase client
                        
            const { data, error } = await supabase
            .storage
            .from(bucketName)
            .move(
                fromPath, 
                toPath
            )
            if (error) {
                throw error;
            }
            setData(data)
        },
        [data, bucketName]
    );

    // Copy an existing file
    // Copies an existing file to a new path in the same bucket.
    const copyFile = useCallback( 
        async (
            fromPath, 
            toPath
        ) => {

            const supabase = createClient(); // establish the Supabase client
                        
            const { data, error } = await supabase
            .storage
            .from(bucketName)
            .copy(
                fromPath, 
                toPath
            )
            if (error) {
                throw error;
            }
            setData(data)
        },
        [data, bucketName]
    );

    // Delete files in a bucket
    // Deletes specified files within the same bucket
    const deleteFiles = useCallback( 
        async (
            paths
        ) => {
            const supabase = createClient(); // establish the Supabase client
                        
            const { data, error } = await supabase
            .storage
            .from(bucketName)
            .remove(
                paths
            )
            if (error) {
                throw error;
            }
            if (data.length == 0) {
                throw new Error('File does not exist or you are not authorized to delete it.')
            }
            setData(data)
        },
        [data, bucketName]
    );

    // List all files in a bucket
    // Lists all the files within a bucket
    const listFiles = useCallback( 
        async (
            path,
            limit,
            offset,
            sortBy,
            search
        ) => {
            const supabase = createClient(); // establish the Supabase client

            let options = Object.assign({},
                limit && { limit: limit },
                offset && { offset: offset },
                sortBy && { sortBy: sortBy },
                search && { search: search }
            )

            console.log("Options: " + JSON.stringify(options))

            const { data, error } = await supabase
            .storage
            .from(bucketName)
            .list(path, options)
            if (error) {
                throw error;
            }
            setData(data)
        },
        [data, bucketName]
    );
    
    // Empty a bucket
    // Removes all objects inside a single bucket
    const emptyBucket = useCallback( 
        async () => {
            const supabase = createClient(); // establish the Supabase client
                        
            const { data, error } = await supabase
            .storage
            .emptyBucket(bucketName)
            if (error) {
                throw error;
            }
            setData(data)
        },
        [data, bucketName]
    );

    // DEFINE ELEMENT ACTIONS THAT CALL THE API FUNCTIONS
    useImperativeHandle(
        ref,
        () => {
            return {
                uploadFile: async (path, base64FileData, contentType, upsert) => {
                    setIsLoading(true)
                    setData(null)
                    setError(null)
                    uploadFile(path, base64FileData, contentType, upsert)
                    .catch((err) => setError(getErrMsg(err)))
                    .finally(() => {
                        setIsLoading(false)
                    })
                    return { data, error }
                },

                uploadManyFiles: async (fileDataList, folder, upsert, replaceFilename) => {
                    setIsLoading(true)
                    setData(null)
                    setError(null)
                    uploadManyFiles(fileDataList, folder, upsert, replaceFilename)
                    .catch((err) => setError(getErrMsg(err)))
                    .finally(() => {
                        setIsLoading(false)
                    })
                    return { data, error }
                },

                downloadFile: async (path, optimization, height, width, quality, resizeMode) => {
                    setIsLoading(true)
                    setData(null)
                    setError(null)
                    downloadFile(path, optimization, height, width, quality, resizeMode)
                    .catch((err) => setError(getErrMsg(err)))
                    .finally(() => {
                        setIsLoading(false)
                    })
                    return { data, error }
                },

                replaceFile: async (path, base64FileData, contentType, upsert) => {
                    setIsLoading(true)
                    setData(null)
                    setError(null)
                    replaceFile(path, base64FileData, contentType, upsert)
                    .catch((err) => setError(getErrMsg(err)))
                    .finally(() => {
                        setIsLoading(false)
                    })
                    return { data, error }
                },
                
                moveFile: async (fromPath, toPath) => {
                    setIsLoading(true)
                    setData(null)
                    setError(null)
                    moveFile(fromPath, toPath)
                    .catch((err) => setError(getErrMsg(err)))
                    .finally(() => {
                        setIsLoading(false)
                    })
                    return { data, error }
                },

                copyFile: async (fromPath, toPath) => {
                    setIsLoading(true)
                    setData(null)
                    setError(null)
                    copyFile(fromPath, toPath)
                    .catch((err) => setError(getErrMsg(err)))
                    .finally(() => {
                        setIsLoading(false)
                    })
                    return { data, error }
                },

                deleteFiles: async (paths) => {
                    setIsLoading(true)
                    setData(null)
                    setError(null)
                    deleteFiles(paths)
                    .catch((err) => setError(getErrMsg(err)))
                    .finally(() => {
                        setIsLoading(false)
                    })
                    return { data, error }
                },

                listFiles: async (path, limit, offset, sortBy, search) => {
                    console.log(limit)
                    setIsLoading(true)
                    setData(null)
                    setError(null)
                    listFiles(path, limit, offset, sortBy, search)
                    .catch((err) => setError(getErrMsg(err)))
                    .finally(() => {
                        setIsLoading(false)
                    })
                    return { data, error }
                },

                emptyBucket: async () => {
                    setIsLoading(true)
                    setData(null)
                    setError(null)
                    emptyBucket()
                    .catch((err) => setError(getErrMsg(err)))
                    .finally(() => {
                        setIsLoading(false)
                    })
                    return { data, error }
                },
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