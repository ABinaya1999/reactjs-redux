import React, { useEffect } from 'react'
import Form from './components/form/Form'
import {reigster} from "../../../store/authSlice"
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../global/status/statuses'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
  const {status} = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const onSubmit = useCallback((data)=>{
    dispatch(register(data))
  }, [status])
  useEffect(()=>{
    if (status===STATUSES.SUCCESS){
      navigate("/login")
    }
  },[status])

  return (
    <Form type='Register' onSubmit={onSubmit}/>
  )
}

export default Register