import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE, GET_PROFILE_SUCCESS, GET_PROFILE_REQUEST } from "./auth.actionType";
import { REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE,SEARCH_USER_REQUEST,SEARCH_USER_SUCCESS,SEARCH_USER_FAILURE } from "./auth.actionType";
const initialState=
{
    jwt:null,
    error:null,
    loading:false,
    user:null,
    searchUser:[]
}
export const authReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case GET_PROFILE_REQUEST:
             return{...state,loading:true,error:null}
        case GET_PROFILE_SUCCESS:
             return{...state,user:action.payload,error:null,loading:false}
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return{...state,jwt:action.payload,loading:false,error:null}
        case SEARCH_USER_SUCCESS:
            return{...state,searchUser:action.payload,loading:false,error:null}
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return{...state,loading:false,error:action.payload}
        default:
             return state;
    }
}