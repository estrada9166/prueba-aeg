import React, {Component} from 'react'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InputHandler from './InputHandler'
import Submit from './Submit'
import Input from '../../handlers/Input'
import SelectInput from '../../handlers/SelectInput'

const age = Array.apply(null, {length: 100}).map(Number.call, Number).slice(1, 100)
const colors = ['Rojo', 'Verde', 'Azul']

const styles = {
  style: {
    textAlign: 'center'
  }
}

const validation = user => {
  const { id, name, age, date, color } = user
  if (id === 1 && name) {
    return false
  } else if (id === 2 && age) {
    return false
  } else if (id === 3) {
    return true
  }
  return true
}

class UserForm extends Component {
  render () {
    const { formReducer } = this.props
    return (
      <div>     
        <Row>
          <Col lg={6} lgOffset={2}>
            {
              formReducer.user.id === 1 ? 
                <Input placeholder='Cual es tu nombre?' title='user' name='name' val={formReducer.user.name}/>
              : null
            }
            {
              formReducer.user.id === 2 && formReducer.user.name ? 
                <SelectInput placeholder='Tengo' title='user' name='age' 
                  disabled={!formReducer.user.name} initial="Selecciona la edad"
                  options={age}
                  val={formReducer.user.age}
                />
              : null
            }
            {
              formReducer.user.id === 3 && formReducer.user.age ?
                formReducer.user.age < 50 ?
                  <Input placeholder='Fecha de nacimiento' type='date' title='user' 
                    name='date' val={formReducer.user.date}/>
                : <SelectInput placeholder='Color preferido' title='user' name='color' 
                  initial="Selecciona tu color preferido" options={colors} val={formReducer.user.color}/>
              : null
            }
          </Col>
          <Col lg={12} style={styles.style}>
            <InputHandler disabledNext={validation(formReducer.user)} disabledPrevious={formReducer.user.id}/>
            {
              formReducer.user.id === 3 && (formReducer.user.date || formReducer.user.color) ?
                <Submit />
              : null
            }
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = ({ formReducer }) => {
  return {
    formReducer
  }
}

export default connect(mapStateToProps)(UserForm)
