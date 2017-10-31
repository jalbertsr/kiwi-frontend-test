import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.less'
import Main from '../Main/Main'

const App = () => (
  <Switch>
    <Route exact path='/' component={Main} />
    { /* <Route component={NotFound} /> */}
  </Switch>
)
export default App
