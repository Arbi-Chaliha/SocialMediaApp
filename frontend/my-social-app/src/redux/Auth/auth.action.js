import axios from "axios"
import { API_BASE_URL } from "../../config/api";
//import { type } from "@testing-library/user-event/dist/type";
import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "./auth.actionType";
export const LoginUserAction=(loginData)=>async(dispatch)=>
{
    dispatch({type:LOGIN_REQUEST})
    try{
       const {data}=axios.post(`${API_BASE_URL}/auth/signin`,loginData.data);
       if(data.jwt)
       {
        localStorage.setItem("jwt",data.jwt)
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
        dispatch({type:LOGIN_REQUEST})
        try{
           const {data}=axios.post(`${API_BASE_URL}/auth/signup`,loginData.data);
           if(data.jwt)
           {
            localStorage.setItem("jwt",data.jwt)
           }
           console.log("register",data);
           dispatch({type:LOGIN_SUCCESS,payload:data.jwt});
        }
        catch(error){
            console.log("........",error);
            dispatch({type:LOGIN_FAILURE,payload:error});
    
        }
    }
       