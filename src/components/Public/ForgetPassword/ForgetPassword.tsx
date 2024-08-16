import React from 'react'
import PublicLayout from '@layouts/PublicLayout'
import MainLayout from '@layouts/MainLayout'
import { LightPButton, PButton } from '@ui/Buttons/Buttons'
import { Link } from 'react-router-dom'
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import css from './forgetPassword.module.scss'
import { Input, Row, Col, Typography } from 'antd'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './valuesAndSchemas'

const { Text } = Typography;

const ForgetPassword: React.FC = () => {
  const { control, formState: { errors }, handleSubmit } = useForm({
    defaultValues: { username: '' },
    resolver: zodResolver(schema)
  });
  const onSubmit: SubmitHandler<{ username: string }> = (data): void => console.log(data);
  console.log("error", errors.username);


  return (
    <PublicLayout>
      <MainLayout>
        <div className={css.form_head}>
          <h2>Forgotten Password?</h2>
          <h5>Enter your username to reset password</h5>
        </div>

        <form
          className={css.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name='username'
            control={control}
            render={({ field }) => <Input className={css.form_inp} {...field}
              placeholder="Username or Email" />}
          />
          {
            errors.username && <Text type='danger'>{errors.username.message}</Text>
          }

          <Row justify="space-between" align="middle">
            <Col>
              <PButton htmlType='submit'>Submit</PButton>
            </Col>
            <Col>
              <Link to='/auth'>
                <LightPButton>Cancel</LightPButton>
              </Link>
            </Col>
          </Row>

        </form>
      </MainLayout>
    </PublicLayout>
  )
}

export default ForgetPassword