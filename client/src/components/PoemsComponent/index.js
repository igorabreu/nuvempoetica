import React from 'react'
import './style.css'
import data from './data'

class PoemsComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPoem: 8,
    }
  }

  handleSelectPoem(index) {
    this.setState({
      currentPoem: index,
    })
  }

  render() {
    const { currentPoem } = this.state
    return (
      <div className="Poems">
        <div className="section-header">
          <div className="header-content">
            <h1 className="section-name">1 poema por dia, 365 por ano</h1>
            <div className="section-description">
              A Nuvem Poética é uma plataforma que conecta a poesia nacional.
              <br />
              Durante o ano de 2019, você vai conhecer aqui 365 poetas do
              Oiapoque ao Chuí.
            </div>
            <div className="poem-list">
              <ul>
                {data.map((poem, index) => {
                  return (
                    <li onClick={() => this.handleSelectPoem(index)}>{`${index +
                      1}. ${poem.author}`}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="poem-wrapper">
          <div className="poem">
            <h2>{data[currentPoem].title}</h2>
            <pre>{data[currentPoem].poem}</pre>
            <h5 className="author">{`${data[currentPoem].author}, poeta do ${
              data[currentPoem].state
            }.`}</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default PoemsComponent
