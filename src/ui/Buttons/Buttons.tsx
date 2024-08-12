import React from 'react'
import { ConfigProvider, Button } from 'antd'
import { PTheme } from './Theme'

type IProps = {
  children: React.ReactNode;
}

export const PButton: React.FC<IProps> = ({ children }) => {
  return (
    <ConfigProvider theme={PTheme}>
      <Button type='primary' size='large'>{children}</Button>
    </ConfigProvider>
  )
}

export const SButton: React.FC<IProps> = ({ children }) => {
  return (
    <ConfigProvider>
      <Button type='primary'>{children}</Button>
    </ConfigProvider>
  )
}