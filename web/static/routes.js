import React from 'react'
import { Route, IndexRoute } from 'react-router'

export default (
  <Route path='/' component={({ children }) => children}>
    <IndexRoute component={() => <div>YOOOO!</div>} />
  </Route>
)
