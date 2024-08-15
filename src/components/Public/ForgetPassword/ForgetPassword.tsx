import React from 'react'
import PublicLayout from '@layouts/PublicLayout'
import { LightPButton } from '@ui/Buttons/Buttons'
import { Link } from 'react-router-dom'

const ForgetPassword:React.FC = () => {
  return (
    <PublicLayout>
        Forget Password
        <Link to='/auth'>
            <LightPButton>Cancel</LightPButton>
        </Link>
    </PublicLayout>
  )
}

export default ForgetPassword