import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import Main from '../components/results'
import { initStore } from '../store'

class Resultados extends Component {
  render () {
    return <Main />
  }
}

export default withRedux(initStore, null)(Resultados)