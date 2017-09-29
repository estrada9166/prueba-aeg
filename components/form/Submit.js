import React, {Component} from 'react'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

export default () => (
  <Link href='/resultados'>
    <Button bsStyle='primary'>
      Submit
    </Button>
  </Link>
)