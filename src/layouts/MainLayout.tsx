import React from 'react'
import '@styles/index.scss'

interface ILayout {
    children: React.ReactNode;
}

const MainLayout:React.FC<ILayout> = ({children}) => {
  return (
    <section className="section">
        <div className="container">{children}</div>
    </section>
  )
}

export default MainLayout