import axios from "axios";

const API = axios.create({
    baseURL:"https://react20.onrender.com/api/",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
})

export default API