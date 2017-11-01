import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.less'
import Main from '../Main/Main'
import ShowFlight from '../ShowFlight/ShowFlight'

const App = () => (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route path='/flight/:query' component={ShowFlight} />
    { /* <Route component={NotFound} /> */}
  </Switch>
)
export default App
