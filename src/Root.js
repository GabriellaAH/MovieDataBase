import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MovieMain from './StateLess/MovieMain'

const Root = () => (
  <Router >
    <Route path="/" component={MovieMain} />
  </Router>
)

export default Root
