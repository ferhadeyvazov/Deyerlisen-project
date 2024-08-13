import { LightPButton, PButton } from '@ui/Buttons/Buttons'
import { Input } from 'antd'
import React from 'react'
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { IData } from './models'

const schema = z.object({
  username: z.string().email(),
  password: z.string().min(10, {message: 'Sifre minimum 10reqemden ibaret olmalidir'})
})

const Login: React.FC = () => {
  const { control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<IData> = (data): void => console.log(data);
  console.log(errors);
  

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='username'
          control={control}
          render={({ field }) => <Input {...field} placeholder="Email and agent number" />}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => <Input.Password {...field} placeholder="Password" />}
        />


        <PButton htmlType="submit">Sign in</PButton>
      </form>


      <LightPButton>Cancel</LightPButton>
    </div>
  )
}

export default Login