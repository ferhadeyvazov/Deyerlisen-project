import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/img/logo-img.png'
import css from './Hero.module.scss'
console.log("Hero render render oldu");

const Hero:React.FC = () => {
  return (
      <aside className={`${css.aside}`}>
        <Link to="/">
            <img src={Logo} alt="logo" />
        </Link>
    </aside>
  )
}

export default Hero