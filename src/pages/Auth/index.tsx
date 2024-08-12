import React from 'react'
import Hero from '@components/Hero/Hero';
import Login from '@components/Login/Login'
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