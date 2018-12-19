import React from 'react'
import './style.css'

const SarauSlamForm = ({ handleEdition, invalidInputs, success, state }) => {
  if (success) {
    return (
      <div className="SarauSlamForm">
        <label className="success">
          Seu cadastro foi feito com sucesso! Muito obrigado! :)
        </label>
      </div>
    )
  }
  return (
    <div className="SarauSlamForm">
      <label className={invalidInputs.includes('type') ? 'required' : ''}>
        Sarau ou Slam?
      </label>
      <select name="type" onChange={handleEdition}>
        <option value="sarau">Sarau</option>
        <option value="slam">Slam</option>
      </select>
      <label className={invalidInputs.includes('name') ? 'required' : ''}>
        Nome
      </label>
      <input
        name="name"
        type="text"
        value={state.name}
        onChange={handleEdition}
      />
      <label
        className={invalidInputs.includes('description') ? 'required' : ''}
      >
        Insira uma descrição curta
      </label>
      <textarea
        name="description"
        type="text"
        value={state.description}
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
      <label className={invalidInputs.includes('itinerant') ? 'required' : ''}>
        Itinerante?
      </label>
      <select name="itinerant" onChange={handleEdition}>
        <option value="sim">Sim</option>
        <option value="não">Não</option>
      </select>
      <label className={invalidInputs.includes('where') ? 'required' : ''}>
        Onde acontece?
      </label>
      <select name="where" onChange={handleEdition}>
        <option value="bar">Bar</option>
        <option valeu="livraria">Livraria</option>
        <option value="igreja">Igreja</option>
        <option value="ponto de cultura">Ponto/Pontão de Cultura</option>
        <option value="ponto de leitura">Ponto de Leitura</option>
        <option value="centro cultural">Centro Cultural</option>
        <option value="escola">Escola</option>
        <option value="espaco publico">Espaço Público</option>
        <option value="outros">Outros</option>
      </select>
      <label className={invalidInputs.includes('frequency') ? 'required' : ''}>
        Quando acontece? (Em que periodicidade)
      </label>
      <input
        name="frequency"
        type="text"
        value={state.frequency}
        onChange={handleEdition}
      />
      <label className={invalidInputs.includes('foundation') ? 'required' : ''}>
        Quando surgiu? (Fundação)
      </label>
      <input
        name="foundation"
        type="text"
        value={state.foundation}
        onChange={handleEdition}
      />
      <label
        className={invalidInputs.includes('sponsorship') ? 'required' : ''}
      >
        A ação já foi contemplada em edital ou algum outro incentivo
        público/privado? (O sarau ou slam já recebeu algum tipo de recurso
        através do município, estado, governo federal ou iniciativa privada?)
      </label>
      <select name="sponsorship" onChange={handleEdition}>
        <option value="sim">Sim</option>
        <option value="não">Não</option>
      </select>
      <label
        className={invalidInputs.includes('announcement') ? 'required' : ''}
      >
        Se sim, qual? (Informe o nome do edital e o ano em que foi contemplado)
      </label>
      <input
        name="announcement"
        type="text"
        value={state.announcement}
        onChange={handleEdition}
      />
      <label className={invalidInputs.includes('email') ? 'required' : ''}>
        Email do sarau ou slam
      </label>
      <input
        name="email"
        type="email"
        value={state.email}
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
      <label className={invalidInputs.includes('yourName') ? 'required' : ''}>
        Seu nome
      </label>
      <input
        name="yourName"
        type="text"
        value={state.yourName}
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
      <label className={invalidInputs.includes('role') ? 'required' : ''}>
        Qual a sua função no sarau ou slam?
      </label>
      <input
        name="role"
        type="text"
        value={state.role}
        onChange={handleEdition}
      />
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
        className={invalidInputs.includes('sexualOrietation') ? 'required' : ''}
      >
        Orientação sexual
      </label>
      <select name="sexualOrietation" onChange={handleEdition}>
        <option value="não informar">Não informar</option>
        <option valeu="heterosexual">Heterosexual</option>
        <option value="lésbica">Lésbica</option>
        <option value="gay">Gay</option>
        <option value="bissexual">Bissexual</option>
        <option value="assexual">Assexual</option>
        <option value="outras">Outras</option>
      </select>
      <label className={invalidInputs.includes('race') ? 'required' : ''}>
        Raça
      </label>
      <select name="race" onChange={handleEdition}>
        <option value="não informar">Não informar</option>
        <option valeu="branca">Branca</option>
        <option value="preta">Preta</option>
        <option value="amarela">Amarela</option>
        <option value="parda">Parda</option>
        <option value="indígena">Indígena</option>
        <option value="outras">Outras</option>
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

export default SarauSlamForm
