import React, {Component} from 'react'
import Link from 'next/link'
import { Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Result extends Component {
  render () {
    const { formReducer } = this.props
    const thirdCase = formReducer.user.date && formReducer.user.age < 50 ? 
      formReducer.user.date : formReducer.user.color
    const thirdCaseName = formReducer.user.date && formReducer.user.age < 50 ? 
      'Fecha de nacimiento' : 'Color preferido'    
    return (
      <div>     
        <Row>
          <Col lg={8} lgOffset={3}>
          <ListGroup>
            <ListGroupItem header="Nombre:">{formReducer.user.name}</ListGroupItem>
            <ListGroupItem header="Edad:" href="#">{formReducer.user.age}</ListGroupItem>
            <ListGroupItem header={thirdCaseName}>{thirdCase}</ListGroupItem>
          </ListGroup>
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

export default connect(mapStateToProps)(Result)
