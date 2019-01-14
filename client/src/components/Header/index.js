import React from 'react'
import { Link } from 'gatsby'
import logo from '../../assets/images/logo.svg'
import './style.css'

const Header = () => (
  <div className="Header">
    <Link to="/" style={{ decoration: 'none', color: '#000' }}>
      <img className="logo-colorido" src={logo} alt="Nuvem Poética" />
    </Link>
  </div>
)

export default Header
