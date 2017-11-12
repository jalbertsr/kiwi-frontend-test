import React from 'react'
import ReactDOM from 'react-dom'
import { LocaleProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import enUS from 'antd/lib/locale-provider/en_US'
import 'babel-polyfill'
import App from './components/App/App.jsx'


ReactDOM.render(
  <BrowserRouter>
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>
  </BrowserRouter>,
  document.getElementById('root'))
