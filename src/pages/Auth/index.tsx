import React from 'react'
import Login from '@/components/Public/Login/Login'
import PublicLayout from '@layouts/PublicLayout';

const Auth: React.FC = () => {
  return (
    <PublicLayout>
      <Login />
    </PublicLayout>
  )
}

export default Auth