import React from 'react'
import { ConfigProvider, Button } from 'antd'
import { PTheme, LightPTheme } from './Theme'

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

export const LightPButton: React.FC<IProps> = ({ children }) => {
  return (
    <ConfigProvider theme={LightPTheme}>
      <Button size='large'>{children}</Button>
    </ConfigProvider>
  )
}
