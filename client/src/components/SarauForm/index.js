import React from 'react'
import './style.css'

const SarauForm = ({ handleEdition, invalidInputs, success }) => {
  if (success) {
    return (
      <div className="SarauForm">
        <label className="success">
          Seu cadastro foi feito com sucesso! Muito obrigado! :)
        </label>
      </div>
    )
  }
  return (
    <div className="SarauForm">
      <label className={invalidInputs.includes('name') ? 'required' : ''}>
        nome do sarau
      </label>
      <input name="name" type="text" onChange={handleEdition} />
      <label
        className={invalidInputs.includes('description') ? 'required' : ''}
      >
        insira uma descrição curta
      </label>
      <input name="description" type="text" onChange={handleEdition} />
      <label className={invalidInputs.includes('address') ? 'required' : ''}>
        endereço completo
      </label>
      <input name="address" type="text" onChange={handleEdition} />
      <label className={invalidInputs.includes('location') ? 'required' : ''}>
        onde e quando acontece
      </label>
      <input name="location" type="text" onChange={handleEdition} />
    </div>
  )
}

export default SarauForm
