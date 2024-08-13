import React from 'react'
import { ConfigProvider, Button } from 'antd'
import { PTheme, LightPTheme } from './Theme'

type IProps = {
  children: React.ReactNode;
  htmlType?: "submit"|"reset"|"button";
}

export const PButton: React.FC<IProps> = ({ children, htmlType }) => {
  
  return (
    <ConfigProvider theme={PTheme}>
      <Button htmlType={htmlType} type='primary' size='large'>{children}</Button>
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
