import { zodResolver } from '@hookform/resolvers/zod'
import { PButton } from '@ui/Buttons/Buttons'
import { Input, Row, Col, Typography } from 'antd'
import React from 'react'
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { IData, inputStyle } from './Types'
import { defaultValue, schema, Schema } from './valuesAndSchemas'
import { Link } from 'react-router-dom'
import css from './Login.module.scss'
import MainLayout from '@layouts/MainLayout'

const { Text } = Typography;

const Login: React.FC = () => {
  const { control, formState: { errors }, handleSubmit } = useForm<Schema>({
    defaultValues: defaultValue,
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<IData> = (data): void => console.log(data);

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
          render={({ field }) => <Input {...field} style={inputStyle} 
            placeholder="Email and agent number" />}
          />
          {
          errors.username && <Text type='danger'>{errors.username.message}</Text>
          }
        <Controller
          name='password'
          control={control}
          render={({ field }) => <Input.Password {...field} 
          style={inputStyle} 
          placeholder="Password" />}
        />
        {
          errors.password && <Text type='danger'>{errors.password.message}</Text>
        }
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