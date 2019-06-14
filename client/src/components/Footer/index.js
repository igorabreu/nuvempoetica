import React from 'react'
import telefonica from '../../assets/images/telefonica-logo.png'
import penseGrande from '../../assets/images/pense-grande-logo.png'
import alianca from '../../assets/images/alianca-logo.png'
import peneira from '../../assets/images/peneira-logo.png'
import './style.css'

const Footer = () => (
  <div className="Footer">
    <div className="footer-content">
      <a
        href="http://www.peneira.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="wrapper">
          <div className="label">Realização:</div>
          <img className="peneira" src={peneira} alt="Coletivo Peneira" />
        </div>
      </a>
    </div>
  </div>
)

export default Footer
