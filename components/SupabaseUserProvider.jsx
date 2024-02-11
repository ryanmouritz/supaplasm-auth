import { useRouter } from "next/router";
import { DataProvider, GlobalActionsProvider } from "@plasmicapp/host";
import { useState, useEffect, useMemo, Component } from "react";
import createClient from '../utils/supabase/component'
import getErrMsg from "../utils/getErrMsg";
import { create } from "domain";


export const SupabaseUser = ({children, defaultRedirectOnLoginSuccess}) => {

  //Nextjs router
  const router = useRouter();
  
  //Setup state
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  //Helper function to get the user and save to state
  async function getUserAndSaveToState() {

    const supabase = createClient();

    //Get the session from stored credentials (not from the server)
    let { data: getSessionData, error: getSessionError } = await supabase.auth.getSession();
    if (getSessionError) {
      throw getSessionError;
    }

    //If no session, set user to null
    if(!getSessionData.session) {
      setUser(null);
      setError(null)
      return;
    }

    //If there is a session, save the user to state
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error(error);
      throw error;
    }
    setUser(data?.user);

  }

  //On initial load, set the session to state
  useEffect(() => {
    getUserAndSaveToState();
  }, [])

  //Global actions that can be called from plasmic studio
  const actions = useMemo(
    () => ({
      //Login
      login: async (email, password, successRedirect) => {
        try {
          const supabase = createClient();
          const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
          });
          if (error) {
            throw error;
          }
          
          //Save the session to state
          setUser(data?.session?.user);
          
          //Reset errors if present
          setError(null);

          //Redirect if needed
          if((successRedirect ?? defaultRedirectOnLoginSuccess) && router) router.push(successRedirect ?? defaultRedirectOnLoginSuccess);
          
          return;

        } catch (e) {
          setError(getErrMsg(e))
          return;
        }
      },
      //Logout
      logout: async (successRedirect) => {
        try {
          const supabase = createClient();
          const { error } = await supabase.auth.signOut();
          if (error) {
            throw error;
          }
          //Reset the session in state
          setUser(null);

          //Reset errors if present
          setError(null);

          //Redirect if needed
          if((successRedirect) && router) router.push(successRedirect);

          return;
        } catch (e) {
          setError(getErrMsg(e))
          return;
        }
      },
      //signUp
      signup: async (email, password, successRedirect) => {
        try {
          const supabase = await createClient();
          const { error } = await supabase.auth.signUp({ 
            email, 
            password 
          });
          if (error) throw error;
          await getUserAndSaveToState();

          setError(null);

          //Redirect if needed
          if((successRedirect) && router) router.push(successRedirect);
          
          // There is potential to include a signup redirect here that would redirect to a page provided in an action parameter
          return;
        } catch (e) {
          setError(getErrMsg(e))
          return;
        }
      },
      //resetPassword
      resetPasswordForEmail: async (email) => {
        try {
          const supabase = await createClient();
          const { error } = await supabase.auth.resetPasswordForEmail(
            email // this auth function takes its parameters slightly differently. It doesn't accept named parameters like the other supabase.auth functions.
          );
          if (error) throw error;
          return;
        } catch (e) {
          setError(getErrMsg(e))
          return;
        }
      },
      // Update User Password
        // This action/function assumes the user has an active session (either by having "Logged in" or clicking the password reset confirmation from a recovery email)
        // Currently this can be used by any authenticated user to change their password without having to re-enter their exisiting password
        // There is likely a more robust way to perform this - 
        // i.e. requiring an expiring token to be passed in the /changepassword URL, validating the token against the supabase DB, only displaying the page if the toekn was valid, otherwise redirect
      updateUserPassword: async (password) => {
        try {
          const supabase = await createClient();
          const { error } = await supabase.auth.updateUser({
            password: password
          });
        } catch (e) {
          setError(getErrMsg(e))
          return;
        }
      },
    }),
    [defaultRedirectOnLoginSuccess, router]
  );
  
  //Setup the data that will be passed as global context to Plasmic studio
  const dataProviderData = {
    user,
    error,
  };

  //Render the actual components
  return (
    <GlobalActionsProvider
      contextName="SupabaseUserGlobalContext"
      actions={actions}
    >
      <DataProvider name="SupabaseUser" data={dataProviderData}>
        {children}
      </DataProvider>
    </GlobalActionsProvider>
  );
};