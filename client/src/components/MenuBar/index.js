import React from 'react'
import { Link } from 'gatsby'
import './style.css'

const MenuBar = ({ selected }) => (
  <div className="Menu-bar">
    <ul className="menu-items">
      <Link to="/" className={selected === 'home' ? 'selected' : 'default'}>
        <li>Home</li>
      </Link>
      <Link
        to="/mapeamento"
        className={selected === 'map' ? 'selected' : 'default'}
      >
        <li>Mapeamento</li>
      </Link>
      <Link
        to="/365-poemas"
        className={selected === 'poems' ? 'selected' : 'default'}
      >
        <li>365 poesias</li>
      </Link>
      <Link
        to="/cadastro"
        className={selected === 'signup' ? 'selected' : 'default'}
      >
        <li>Cadastre-se</li>
      </Link>
    </ul>
  </div>
)

export default MenuBar
