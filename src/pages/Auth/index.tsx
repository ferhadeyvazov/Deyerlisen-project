import React from 'react'
import Hero from '@/components/Public/Hero/Hero';
import Login from '@/components/Public/Login/Login'
import Footer from '@layouts/Footer/Footer'

const Auth: React.FC = () => {
  return (
    <>
      <Hero />
      <Login />
      <Footer/>
    </>
  )
}

export default Auth