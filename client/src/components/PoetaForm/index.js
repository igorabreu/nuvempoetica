import React from 'react'
import './style.css'

const PoetaForm = ({ handleEdition, invalidInputs, success, state }) => {
  if (success) {
    return (
      <div className="PoetaForm">
        <label className="success">
          Seu cadastro foi feito com sucesso! Muito obrigado! :)
        </label>
      </div>
    )
  }
  return (
    <div className="PoetaForm">
      <label
        className={invalidInputs.includes('completeName') ? 'required' : ''}
      >
        Nome Completo
      </label>
      <input
        name="completeName"
        type="text"
        value={state.completeName}
        onChange={handleEdition}
      />
      <label
        className={invalidInputs.includes('artisticName') ? 'required' : ''}
      >
        Nome Artístico
      </label>
      <input
        name="artisticName"
        type="text"
        value={state.artisticName}
        onChange={handleEdition}
      />
      <label
        className={invalidInputs.includes('description') ? 'required' : ''}
      >
        Insira uma breve descrição sobre você
      </label>
      <textarea
        name="description"
        type="text"
        value={state.description}
        onChange={handleEdition}
      />
      <label className={invalidInputs.includes('cellphone') ? 'required' : ''}>
        Contato celular
      </label>
      <input
        name="cellphone"
        type="tel"
        value={state.cellphone}
        pattern="/^(0[1-2][1-9]9\d{8})|(0[3-9][1-9]\d{8})$/"
        onChange={handleEdition}
      />
      <label
        className={invalidInputs.includes('socialnetwork') ? 'required' : ''}
      >
        Redes sociais
      </label>
      <input
        name="socialnetwork"
        type="text"
        value={state.socialnetwork}
        onChange={handleEdition}
      />
      <label className={invalidInputs.includes('photo') ? 'required' : ''}>
        Foto (link)
      </label>
      <input
        name="photo"
        type="text"
        value={state.photo}
        onChange={handleEdition}
      />
      <label className={invalidInputs.includes('video') ? 'required' : ''}>
        Video (link)
      </label>
      <input
        name="video"
        type="text"
        value={state.video}
        onChange={handleEdition}
      />
      <label className={invalidInputs.includes('yourEmail') ? 'required' : ''}>
        Seu email
      </label>
      <input
        name="yourEmail"
        type="text"
        value={state.yourEmail}
        onChange={handleEdition}
      />
      <label className={invalidInputs.includes('birth') ? 'required' : ''}>
        Data de Nascimento
      </label>
      <input
        name="birth"
        type="date"
        value={state.birth}
        onChange={handleEdition}
      />
      <label className="section">Endereço completo:</label>
      <label className={invalidInputs.includes('cep') ? 'required' : ''}>
        CEP
      </label>
      <input
        name="cep"
        type="text"
        value={state.cep}
        onChange={handleEdition}
      />
      <label className={invalidInputs.includes('street') ? 'required' : ''}>
        Rua
      </label>
      <input
        name="street"
        type="text"
        value={state.street}
        onChange={handleEdition}
      />
      <label className={invalidInputs.includes('number') ? 'required' : ''}>
        Número
      </label>
      <input
        name="number"
        type="text"
        value={state.number}
        onChange={handleEdition}
      />
      <label className={invalidInputs.includes('complement') ? 'required' : ''}>
        Complemento
      </label>
      <input
        name="complement"
        type="text"
        value={state.complement}
        onChange={handleEdition}
      />
      <label className={invalidInputs.includes('city') ? 'required' : ''}>
        Município
      </label>
      <input
        name="city"
        type="text"
        value={state.city}
        onChange={handleEdition}
      />
      <label className={invalidInputs.includes('state') ? 'required' : ''}>
        Estado
      </label>
      <input
        name="state"
        type="text"
        value={state.state}
        onChange={handleEdition}
      />
      <label
        className={invalidInputs.includes('publication') ? 'required' : ''}
      >
        Já participou de alguma publicação?
      </label>
      <select name="publication" onChange={handleEdition}>
        <option value="sim">Sim</option>
        <option valeu="não">Não</option>
      </select>
      <label
        className={invalidInputs.includes('typePublication') ? 'required' : ''}
      >
        Se já participou, selecione o tipo
      </label>
      <select name="typePublication" onChange={handleEdition}>
        <option value="" />
        <option value="Independente">Independente</option>
        <option valeu="Independente com Editora">
          Independente com Editora
        </option>
        <option valeu="Editora">Editora</option>
      </select>
      <label
        className={invalidInputs.includes('instruction') ? 'required' : ''}
      >
        Grau de instrução
      </label>
      <select name="instruction" onChange={handleEdition}>
        <option value="Não informar">Não informar</option>
        <option value="Analfabeto">Analfabeto</option>
        <option value="Autodidata">Autodidata</option>
        <option value="Ensino fundamental incompleto">
          Ensino fundamental incompleto
        </option>
        <option value="Ensino fundamental completo">
          Ensino fundamental completo
        </option>
        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
        <option value="Ensino médio completo">Ensino médio completo</option>
        <option value="Superior completo">Superior completo</option>
        <option value="Superior incompleto">Superior incompleto</option>
        <option value="Pós-Graduação">Pós-Graduação</option>
        <option value="Mestrado">Mestrado</option>
        <option value="Doutorado">Doutorado</option>
        <option value="Pós-doutorado">Pós-doutorado</option>
      </select>
      <label className={invalidInputs.includes('gender') ? 'required' : ''}>
        Gênero
      </label>
      <select name="gender" onChange={handleEdition}>
        <option value="Não informar">Não informar</option>
        <option valeu="Mulher Transsexual">Mulher Transsexual</option>
        <option value="Mulher">Mulher</option>
        <option value="Homem">Homem</option>
        <option value="Não binário">Não binário</option>
        <option value="Travesti">Travesti</option>
        <option value="Outras">Outras</option>
      </select>
      <label
        className={
          invalidInputs.includes('sexual-orietation') ? 'required' : ''
        }
      >
        Orientação sexual
      </label>
      <select name="sexual-orietation" onChange={handleEdition}>
        <option value="Não informar">Não informar</option>
        <option valeu="Heterosexual">Heterosexual</option>
        <option value="Lésbica">Lésbica</option>
        <option value="Gay">Gay</option>
        <option value="Bissexual">Bissexual</option>
        <option value="Assexual">Assexual</option>
        <option value="Outras">Outras</option>
      </select>
      <label className={invalidInputs.includes('race') ? 'required' : ''}>
        Raça
      </label>
      <select name="race" onChange={handleEdition}>
        <option value="Não informar">Não informar</option>
        <option valeu="Branca">Branca</option>
        <option value="Preta">Preta</option>
        <option value="Amarela">Amarela</option>
        <option value="Parda">Parda</option>
        <option value="indígena">Indígena</option>
        <option value="Outras">Outras</option>
      </select>
      <label className={invalidInputs.includes('event') ? 'required' : ''}>
        Costuma participar de algum evento literário?
      </label>
      <select name="event" onChange={handleEdition}>
        <option value="" />
        <option value="Sim">Sim</option>
        <option valeu="Não">Não</option>
      </select>
      <label className={invalidInputs.includes('eventType') ? 'required' : ''}>
        Se sim, qual?
      </label>
      <select name="eventType" onChange={handleEdition}>
        <option value="" />
        <option value="Sarau">Sarau</option>
        <option valeu="Slam">Slam</option>
        <option valeu="Roda de rima">Roda de rima</option>
        <option valeu="Festas e feiras literárias">
          Festas e feiras literárias
        </option>
        <option valeu="Outros">Outros</option>
      </select>
      <div className="agreement-wrapper">
        <input
          className="agreement-input"
          name="agreement"
          type="checkbox"
          onChange={handleEdition}
        />
        <label
          className={`agreement ${
            invalidInputs.includes('agreement') ? 'required' : ''
          }`}
        >
          Concordo e autorizo o uso das informações para utilização na Nuvem
          Poética
        </label>
      </div>
    </div>
  )
}

export default PoetaForm
