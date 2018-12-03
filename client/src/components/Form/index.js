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
      form: {},
      invalidInputs: [],
      requiredInputs: ['name', 'description', 'address', 'location'],
    }
  }

  handleSelected = selected => {
    this.setState({
      selected,
      success: false,
      invalidInputs: [],
      form: {},
    })
  }

  handleEdition = (e, type) => {
    const { form } = this.state

    if (e.target.name === 'cep' && e.target.value.length > 7) {
      API.GET(e.target.value).then(res => {
        this.setState({
          form: {
            ...form,
            street: res.logradouro,
            neighborhood: res.bairro,
            city: res.localidade,
            state: res.uf,
          },
        })
      })
    }
    this.setState({
      form: {
        ...form,
        [e.target.name]: e.target.value,
        formType: type,
      },
    })
    console.log(this.state.form)
  }

  handleSubmit() {
    const { form, requiredInputs } = this.state
    let invalidInputs = []
    requiredInputs.map(reqField => {
      if (!form[reqField] || '') {
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
      console.log(form)
      API.POST(form)
      /*
      this.setState({
        success: true,
      })*/
    }
  }

  componentDidMount() {}

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
            handleEdition={e => this.handleEdition(e, 'poeta')}
            invalidInputs={invalidInputs}
            success={success}
            state={this.state.form}
          />
        ) : null}
        {selected === 'slam' ? (
          <SlamSarauForm
            handleEdition={e => this.handleEdition(e, 'sarauSlam')}
            invalidInputs={invalidInputs}
            success={success}
            state={this.state.form}
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
