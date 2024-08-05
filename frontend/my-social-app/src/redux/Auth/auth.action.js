import axios from "axios"
import { API_BASE_URL } from "../../config/api";
//import { type } from "@testing-library/user-event/dist/type";
import { api } from "../../config/api";
import {SEARCH_USER_REQUEST,SEARCH_USER_SUCCESS,SEARCH_USER_FAILURE, LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE} from "./auth.actionType";

export const LoginUserAction=(loginData)=>async(dispatch)=>
{
    dispatch({type:LOGIN_REQUEST})
    try{
       const {data}=await axios.post(`${API_BASE_URL}/auth/signin`,loginData.data);
       if(data.token)
       {
        localStorage.setItem("jwt",data.token)
       }
       console.log("login success",data);
       dispatch({type:LOGIN_SUCCESS,payload:data.jwt});
    }
    catch(error){
        console.log("........",error);
        dispatch({type:LOGIN_FAILURE,payload:error});

    }
}






export const registerUserAction=(loginData)=>async(dispatch)=>
    {
        dispatch({type:REGISTER_REQUEST})
        try{
           const {data}=axios.post(`${API_BASE_URL}/auth/signup`,loginData.data);
           if(data.token)
           {
            localStorage.setItem("jwt",data.token)
           }
           console.log("register",data);
           dispatch({type:REGISTER_SUCCESS,payload:data.jwt});
        }
        catch(error){
            console.log("........",error);
            dispatch({type:REGISTER_FAILURE,payload:error});
    
        }
    }

 




    export const getProfileAction=(jwt)=>async(dispatch)=>
        {
            dispatch({type:GET_PROFILE_REQUEST})
            try{
               const {data}=axios.get(`${API_BASE_URL}/api/users/profile`,
                {
                    headers:{
                        Authorization:`Bearer${jwt}`
                    }
                });
              
               console.log("profile---",data);
               dispatch({type:GET_PROFILE_SUCCESS,payload:data});
            }
            catch(error){
                console.log("........",error);
                dispatch({type:GET_PROFILE_FAILURE,payload:error});
        
            }
        }



        export const updateProfileAction=(reqData)=>async(dispatch)=>
            {
                dispatch({type:UPDATE_PROFILE_REQUEST})
                try{
                   const {data}=axios.post(`${API_BASE_URL}/api/users`,reqData);
                  
                   console.log("profile---",data);
                   dispatch({type:UPDATE_PROFILE_SUCCESS,payload:data});
                }
                catch(error){
                    console.log("........",error);
                    dispatch({type:UPDATE_PROFILE_FAILURE,payload:error});
            
                }
            }


            export const searchUser=(query)=>async(dispatch)=>
                {
                    dispatch({type:SEARCH_USER_REQUEST})
                    try{
                       const {data}=await api.get(`/api/users/search?query=${query}`)
                      
                      
                       console.log("search user---",data);
                       dispatch({type:SEARCH_USER_SUCCESS,payload:data});
                    }
                    catch(error){
                        console.log("........",error);
                        dispatch({type:SEARCH_USER_FAILURE,payload:error});
                
                    }
                }
        
        


               