import React, {Component} from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Input from '../../handlers/Input'
import SelectInput from '../../handlers/SelectInput'
import { inputHandler } from '../../actions'

class InputHandlerComponent extends Component {
  nextInput = () => {
    const { formReducer, inputHandler } = this.props;
    const inputId = formReducer.user.id > 3 ? 1 : formReducer.user.id
    inputHandler(inputId + 1)
  }

  previousInput = () => {
    const { formReducer, inputHandler } = this.props;
    const inputId = formReducer.user.id < 1 ? 2 : formReducer.user.id
    inputHandler(inputId - 1)
  }

  render () {
    return (
      <div>     
        <Button bsStyle='primary' onClick={this.previousInput} disabled={this.props.disabledPrevious === 1}>Anterior</Button>
        <Button bsStyle='primary' onClick={this.nextInput} disabled={this.props.disabledNext}>siguiente</Button>
      </div>
    )
  }
}

const mapStateToProps = ({ formReducer }) => {
  return {
    formReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputHandler: bindActionCreators(inputHandler, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputHandlerComponent)
