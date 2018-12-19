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
        href="http://fundacaotelefonica.org.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="wrapper">
          <div className="label">Apoio:</div>
          <img
            className="telefonica"
            src={telefonica}
            alt="Fundação Telefônica"
          />
        </div>
      </a>
      <a
        href="http://pensegrande.org.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="wrapper">
          <div className="label">{''}</div>
          <img className="penseGrande" src={penseGrande} alt="Pense Grande" />
        </div>
      </a>
      <a
        href="https://aliancaempreendedora.org.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="wrapper">
          <div className="label">Organização Parceira:</div>
          <img className="alianca" src={alianca} alt="Aliança Empreendedora" />
        </div>
      </a>
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
