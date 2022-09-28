import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'

import 'antd/dist/antd.variable.min.css'
import './assets/css/index.less'

import { HashRouter } from 'react-router-dom'
import App from './App'

// 配置主题颜色
// ConfigProvider.config({
//   theme: {
//     primaryColor: '#ff385c'
//   }
// })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ConfigProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ConfigProvider>
)
