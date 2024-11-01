import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import { ErrorBoundary } from 'react-error-boundary'

const Home = () => {
  return (
    
   <Layout>
    <div className='flex flex-wrap justify-center space-x-5 mt-6'>
    <ErrorBoundary fallback={<div>Something went wrong card 1</div>}>
      <Card />
    </ErrorBoundary>
    <ErrorBoundary fallback={<div>Something went wrong card 2</div>}>
      <Card />
    </ErrorBoundary>
    <ErrorBoundary fallback={<div>Something went wrong card 3</div>}>
      <Card />
    </ErrorBoundary>
    </div>
   </Layout>
  )
}

export default Home