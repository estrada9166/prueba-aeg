import React, {Component} from 'react'
import Link from 'next/link'
import { Col, Row, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Input from '../../handlers/Input'
import SelectInput from '../../handlers/SelectInput'

const age = Array.apply(null, {length: 100}).map(Number.call, Number).slice(1, 100)
const colors = ['Rojo', 'Verde', 'Azul']

const styles = {
  style: {
    textAlign: 'center'
  }
}

class UserForm extends Component {
  render () {
    const { formReducer } = this.props
    return (
      <div>     
        <Row>
          <Col lg={6} lgOffset={2}>
            <Input placeholder='Cual es tu nombre?' title='user' name='name' />
            <SelectInput placeholder='Tengo' title='user' name='age' 
              disabled={!formReducer.user.name} initial="Selecciona la edad"
              options={age}
            />
            {
              formReducer.user.age ?
                formReducer.user.age < 50 ?
                  <Input placeholder='Fecha de nacimiento' type='date' title='user' 
                    name='date' />
                : <SelectInput placeholder='Color preferido' title='user' name='color' 
                  initial="Selecciona tu color preferido" options={colors} />
              : null
            }
          </Col>
          <Col lg={12} style={styles.style}>
            <Link href='/resultados'>
              <Button bsStyle='primary'>
                Submit
              </Button>
            </Link>
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
