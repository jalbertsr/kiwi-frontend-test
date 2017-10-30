import React from 'react'
import './App.scss'
import './App.less'
import { Calendar } from 'antd'

const App = () => {
  function onPanelChange (value, mode) {
    console.log(value, mode)
  }

  return (
    <div>
      <h1>Hola!</h1>
      <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </div>
  )
}

export default App
