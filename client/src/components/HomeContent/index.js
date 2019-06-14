import React from 'react'
import { Link } from 'gatsby'
import './style.css'

const HomeContent = () => (
  <div className="HomeContent">
    <div className="wrapper-content">
      <Link
        className="link-wrapper map"
        to="/mapeamento"
        style={{ textDecoration: 'none', color: '#000' }}
      >
        <h3>Mapeamento de Saraus, Slams e Poetas</h3>
        <div className="card" />
      </Link>
      <Link
        className="link-wrapper singup"
        to="/cadastro"
        style={{ textDecoration: 'none', color: '#000' }}
      >
        <h3>Cadastre-se</h3>
        <div className="card" />
      </Link>
    </div>
  </div>
)

export default HomeContent
