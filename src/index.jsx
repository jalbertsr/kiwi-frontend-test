import React from 'react'
import ReactDOM from 'react-dom'
import { LocaleProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import enUS from 'antd/lib/locale-provider/en_US'
import App from './components/App/App.jsx'

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LocaleProvider>,
  document.getElementById('root'))
