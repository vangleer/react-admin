import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'

import 'antd/dist/antd.variable.min.css'
import './assets/css/index.less'

import { HashRouter } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ConfigProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ConfigProvider>
  </Provider>

)
