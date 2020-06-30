import { Router } from '@reach/router'
import React from 'react'
import PageDetail from '../components/pages/pageDetail'

export default props => {
  return (
    <Router>
      <PageDetail path="/page/:slug" />
    </Router>
  )
}
