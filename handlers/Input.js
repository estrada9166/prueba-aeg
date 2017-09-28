import React, {Component} from 'react'
import { Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { inputChange } from '../actions'

const styles = {
  style: { textAlign: 'left' }
}

class Input extends Component {
  inputChange = (e) => {
    const { inputChange, title, name } = this.props
    inputChange(title, name, e.target.value)
  }

  render () {
    const { placeholder, type, disabled, val } = this.props
    return (
      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} lg={4} style={styles.style}>
              {placeholder}
            </Col>
            <Col lg={8}>
              <FormControl 
                type={type || 'text'} 
                placeholder={placeholder}
                onChange={this.inputChange}
                disabled={disabled}
                value={val}
              />
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

export default connect(null, mapDispatchToProps)(Input)
