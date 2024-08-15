import { zodResolver } from '@hookform/resolvers/zod'
import { PButton } from '@ui/Buttons/Buttons'
import { Input, Row, Col } from 'antd'
import React from 'react'
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { IData, inputStyle } from './models'
import { defaultValue, schema } from './valuesAndSchemas'
import { Link } from 'react-router-dom'
import css from './Login.module.scss'
import MainLayout from '@layouts/MainLayout'

const Login: React.FC = () => {
  const { control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: defaultValue,
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<IData> = (data): void => console.log(data);
  console.log(errors);
  console.log("Login Render oldu");

  return (
    <MainLayout>
      <div className={css.login_head}>
        <h2>Login Account</h2>
        <h5>Enter your email and password</h5>
      </div>
      <form style={{ maxWidth: 370, margin: "auto" }} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='username'
          control={control}
          render={({ field }) => <Input style={inputStyle} {...field} placeholder="Email and agent number" />}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => <Input.Password style={inputStyle} {...field} placeholder="Password" />}
        />
        <Row justify="space-between" align="middle">
          <Col>
            <Link to='/auth/forgetPassword'><h4 className={css.forgetPassword}>Forgot Password</h4></Link>
          </Col>
          <Col>
            <PButton htmlType="submit">Sign in</PButton>
          </Col>
        </Row>
      </form>
    </MainLayout>
  )
}

export default Login