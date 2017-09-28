import React, {Component} from 'react'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import Header from '../utils/Header'
import Result from './Result'

class Main extends Component {
  render () {
    return (
      <div>
        <Head>
          <title>Resultado</title>
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' />
        </Head>
        <Header />
        <Row>
          <Col lg={8}>
            <Result />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Main
