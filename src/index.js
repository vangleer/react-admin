import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.less'
import './assets/css/index.less'

import { HashRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
