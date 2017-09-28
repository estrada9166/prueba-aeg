import React, {Component} from 'react'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import Header from '../utils/Header'
import UserForm from './UserForm'

class Main extends Component {
  render () {
    return (
      <div>
        <Head>
          <title>Form</title>
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' />
        </Head>
        <Header />
        <Row>
          <Col lg={12}>
            <UserForm />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Main
