import React from 'react'
import PoetaForm from '../PoetaForm'
import SlamSarauForm from '../SlamSarauForm'
import API from '../../services/API'
import './style.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'poeta',
      formPoeta: {
        formType: 'Poeta',
        completeName: '',
        artisticName: '',
        description: '',
        cellphone: '',
        socialnetwork: '',
        photo: '',
        video: '',
        yourEmail: '',
        birth: '',
        cep: '',
        street: '',
        number: '',
        complement: '',
        city: '',
        state: '',
        publication: 'sim',
        typePublication: '',
        instruction: 'não informar',
        gender: 'não informar',
        sexualOrietation: 'não informar',
        race: 'não informar',
        event: '',
        eventType: '',
        agreement: '',
      },
      formSarau: {
        formType: 'SarauSlam',
        type: 'sarau',
        name: '',
        description: '',
        cep: '',
        street: '',
        number: '',
        complement: '',
        city: '',
        state: '',
        itinerant: 'sim',
        where: 'bar',
        frequency: '',
        foundation: '',
        sponsorship: 'sim',
        announcement: '',
        email: '',
        cellphone: '',
        socialnetwork: '',
        photo: '',
        video: '',
        yourName: '',
        yourEmail: '',
        birth: '',
        role: '',
        gender: 'não informar',
        sexualOrietation: 'não informar',
        race: 'não informar',
        agreement: 'não',
      },
      invalidInputs: [],
      requiredInputsPoeta: ['description'],
      requiredInputsSarau: ['description'],
    }
  }

  handleSelected = selected => {
    this.setState({
      selected,
      success: false,
      invalidInputs: [],
      formPoeta: {
        formType: 'Poeta',
        completeName: '',
        artisticName: '',
        description: '',
        cellphone: '',
        socialnetwork: '',
        photo: '',
        video: '',
        yourEmail: '',
        birth: '',
        cep: '',
        street: '',
        number: '',
        complement: '',
        city: '',
        state: '',
        publication: 'sim',
        typePublication: '',
        instruction: 'não informar',
        gender: 'não informar',
        sexualOrietation: 'não informar',
        race: 'não informar',
        event: '',
        eventType: '',
        agreement: '',
      },
      formSarau: {
        formType: 'SarauSlam',
        type: 'sarau',
        name: '',
        description: '',
        cep: '',
        street: '',
        number: '',
        complement: '',
        city: '',
        state: '',
        itinerant: 'sim',
        where: 'bar',
        frequency: '',
        foundation: '',
        sponsorship: 'sim',
        announcement: '',
        email: '',
        cellphone: '',
        socialnetwork: '',
        photo: '',
        video: '',
        yourName: '',
        yourEmail: '',
        birth: '',
        role: '',
        gender: 'não informar',
        sexualOrietation: 'não informar',
        race: 'não informar',
        agreement: 'não',
      },
    })
  }

  handleEdition = (e, type) => {
    if (e.target.name === 'cep' && e.target.value.length > 7) {
      API.GET(e.target.value).then(res => {
        this.setState({
          [type]: {
            ...this.state[type],
            street: res.logradouro,
            neighborhood: res.bairro,
            city: res.localidade,
            state: res.uf,
          },
        })
      })
    }
    this.setState({
      [type]: {
        ...this.state[type],
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmit() {
    const {
      formPoeta,
      formSarau,
      requiredInputsPoeta,
      requiredInputsSarau,
      selected,
    } = this.state
    let invalidInputs = []
    let currentForm = selected === 'poeta' ? formPoeta : formSarau
    let requiredInputs =
      selected === 'poeta' ? requiredInputsPoeta : requiredInputsSarau
    requiredInputs.map(reqField => {
      if (!currentForm[reqField]) {
        console.log(reqField)
        return invalidInputs.push(reqField)
      } else {
        return null
      }
    })
    if (invalidInputs.length > 0) {
      this.setState({
        invalidInputs,
      })
    } else {
      console.log(currentForm)
      API.POST(currentForm)
      this.setState({
        success: true,
      })
    }
  }

  render() {
    const { selected, invalidInputs, success } = this.state
    return (
      <div className="Form">
        <div className="entry-text">
          Um lugar para conhecer poetas de todo o país.
          <br /> Descobrir onde rolam os slams e os saraus. Trocar umas ideias
          sobre poesia.
          <br />
          Essa é a <b>Nuvem Poética</b>, uma plataforma que está sendo
          desenvolvida para conectar, potencializar e visibilizar um ecossistema
          da poesia contemporânea.
          <br />
          Com o crescente surgimento de poetas, saraus e slams pelo país, se faz
          necessário termos um diagnóstico de quem constrói, escreve, produz e
          cria mecanismos de difusão para a poesia.
          <br />
          Faz parte desse movimento e quer somar nessa construção? Cadastre-se e
          venha para a <b>Nuvem Poética</b>.
        </div>
        <div className="types-bar">
          <div className="types">
            <span
              className={selected === 'poeta' ? 'selected' : null}
              onClick={() => this.handleSelected('poeta')}
            >
              Cadastrar Poeta
            </span>
            <span
              className={selected === 'slam' ? 'selected' : null}
              onClick={() => this.handleSelected('slam')}
            >
              Cadastrar Slam ou Sarau
            </span>
          </div>
        </div>
        <div />
        {selected === 'poeta' ? (
          <PoetaForm
            handleEdition={e => this.handleEdition(e, 'formPoeta')}
            invalidInputs={invalidInputs}
            success={success}
            state={this.state.formPoeta}
          />
        ) : null}
        {selected === 'slam' ? (
          <SlamSarauForm
            handleEdition={e => this.handleEdition(e, 'formSarau')}
            invalidInputs={invalidInputs}
            success={success}
            state={this.state.formSarau}
          />
        ) : null}
        <div className="messages">
          {!success ? (
            <div>
              <span style={{ color: '#ff5151' }}>(*)</span> campos obrigatórios
            </div>
          ) : (
            <div />
          )}
          {invalidInputs.length > 0 ? (
            <div>Confira os campos em vermelho que estão pendentes.</div>
          ) : (
            <div />
          )}
        </div>
        <div className="confirm-bar">
          {!success ? (
            <button
              className="button-confirm"
              type="confirm"
              onClick={() => this.handleSubmit()}
            >
              Enviar
            </button>
          ) : null}
        </div>
      </div>
    )
  }
}

export default Form
