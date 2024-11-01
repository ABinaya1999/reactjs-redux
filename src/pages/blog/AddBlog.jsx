import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { addblog } from '../../../store/blogSlice'
import { useNavigate } from 'react-router-dom'
import STATUSES from '../../global/status/statuses'

const AddBlog = () => {
  const navigate = useNavigate()
  const {status} = useSelector((state)=> state.blog)
  const dispatch = useDispatch()
  const onSubmit = (data)=>{
    dispatch(addblog(data))
    
  }
  useEffect(()=>{
    if (status == STATUSES.SUCCESS){
      navigate("/")
    }
  }, [status])

  return (
  <Layout>
	  <Form type='Create' onSubmit={onSubmit}/>
  </Layout>
  )
}

export default AddBlog