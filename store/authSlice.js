import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/global/status/statuses";
import API from "../src/http";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        token:null,
        status:null
    },
    reducers:{
        setUser(state,action){
            state.user=action.payload
        },
        setToken(state,action){
            state.token=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        }
    }
}
)

export const {setUser, setToken, setStatus} = authSlice.actions
export default authSlice.reducer

export function register(data){
    return async function registerThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try{
            const response = await API.get("register", data, {
                headers:{
                    "Content-Type": "multipart/form-data"
                }
            })
        if (response.status===201){
            dispatch(setStatus(STATUSES.SUCCESS))
        }else{
            dispatch(setStatus(STATUSES.ERROR))
        }
        }catch(error){
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}