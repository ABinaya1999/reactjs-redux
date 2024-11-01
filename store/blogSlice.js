import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const blogSlice = createSlice({
    name:"blog",
    initialState:{
        data:null,
        status:null
    },
    reducers:{
        setData(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
    }
})

export const {setData} = blogSlice.actions
export default blogSlice.reducer

export function addblog(data){
    return async function addblogThunk(dispatch){
        dispatch(setData(data))
        try{
            const response = await axios.post("https://react20.onrender.com/api/addblog", data)
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