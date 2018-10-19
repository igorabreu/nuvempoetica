import React from 'react'
import './style.css'
import sarauLogo from '../../assets/images/sarau-logo.svg'
import sarauLogoSelected from '../../assets/images/sarau-logo-selected.svg'
import slamLogo from '../../assets/images/slam-logo.svg'
import slamLogoSelected from '../../assets/images/slam-logo-selected.svg'
import SarauForm from '../SarauForm'
import SlamForm from '../SlamForm'
import API from '../../services/API'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSarau: true,
      form: {},
      invalidInputs: [],
      requiredInputs: ['name', 'description', 'address', 'location'],
    }
  }

  toggleSarau = state => {
    this.setState({
      selectedSarau: state,
      success: false,
      invalidInputs: [],
      form: {},
    })
  }

  handleEdition = e => {
    const { form } = this.state
    this.setState({
      form: {
        ...form,
        [e.target.name]: e.target.value,
      },
    })
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
      API.post(form)
      /*
      this.setState({
        success: true,
      })*/
    }
  }

  render() {
    const { selectedSarau, invalidInputs, success } = this.state
    return (
      <div className="Form">
        <div className="types-bar">
          <div className="types">
            <img
              src={selectedSarau ? sarauLogoSelected : sarauLogo}
              className="type-logo"
              alt="Sarau"
              onClick={() => this.toggleSarau(true)}
            />
            <img
              src={selectedSarau ? slamLogo : slamLogoSelected}
              className="type-logo"
              alt="Slam"
              onClick={() => this.toggleSarau(false)}
            />
          </div>
        </div>
        <div />
        {selectedSarau ? (
          <SarauForm
            handleEdition={e => this.handleEdition(e)}
            invalidInputs={invalidInputs}
            success={success}
          />
        ) : (
          <SlamForm
            handleEdition={e => this.handleEdition(e)}
            invalidInputs={invalidInputs}
            success={success}
          />
        )}
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
