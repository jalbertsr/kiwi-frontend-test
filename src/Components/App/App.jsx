import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.less'
import Main from '../Main/Main'
import ShowFlight from '../ShowFlight/ShowFlight'
import Navbar from '../Navbar/Navbar'

const App = () =>
  <div>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/flight/:query' component={ShowFlight} />
    </Switch>
  </div>

export default App
