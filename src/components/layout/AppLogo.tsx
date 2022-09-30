import React from 'react'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

export default function AppLogo() {
  const { collapsed, mode } = useSelector((state: RootState) => state.app)
  const text = mode === 'side' ? !collapsed && <h1>React Admin</h1> : <h1>React Admin</h1>
  return (
    <a className="ra-logo" href="/">
      <img className="ra-logo-icon" src="/logo.png" />
      {text}
    </a>
  )
}
