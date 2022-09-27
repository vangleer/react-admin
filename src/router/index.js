import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/home'))
const Demo1 = React.lazy(() => import('@/views/demo1'))
const Demo2 = React.lazy(() => import('@/views/demo2'))
const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/demo1',
    element: <Demo1 />
  },
  {
    path: '/demo2',
    element: <Demo2 />
  }
]

export default routes