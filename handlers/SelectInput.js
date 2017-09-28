import React, {Component} from 'react'
import { Form, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inputChange } from '../actions'

const styles = {
  style: { textAlign: 'left' }
}

class SelectInput extends Component {
  inputChange = (e) => {
    const { inputChange, title, name } = this.props
    inputChange(title, name, e.target.value)
  }

  render() {
    const { placeholder, disabled, inputChange, val, initial, options, name } = this.props
    return (
      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} lg={4} style={styles.style}>
              {placeholder}
            </Col>
            <Col lg={8}>
              <FormControl
                disabled={disabled}
                componentClass="select"
                placeholder={placeholder}
                onChange={this.inputChange}
                value={val}
              >
              <option value={initial}>{initial}</option>
              {
                options.map(val => {
                  return (
                    <option key={val} value={val}>
                      { name === 'age' ? `${val} años` : val }
                    </option>
                  )
                })
              }
              </FormControl>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputChange: bindActionCreators(inputChange, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SelectInput)
