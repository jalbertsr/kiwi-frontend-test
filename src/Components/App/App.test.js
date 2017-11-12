import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { MemoryRouter as Router } from 'react-router-dom'

test('App renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <App />
    </Router>, div)
})
