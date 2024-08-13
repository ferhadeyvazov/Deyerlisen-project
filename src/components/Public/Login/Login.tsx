import React from 'react'
import { PButton, LightPButton } from '@ui/Buttons/Buttons'

const Login:React.FC = () => {
  return (
    <div>Login
          <PButton>Sign in</PButton>
          <LightPButton>Cancel</LightPButton>
    </div>
  )
}

export default Login