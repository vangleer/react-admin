import React from 'react'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { appConfig } from '@/config'
import logo from '@/assets/images/logo.png'
export default function AppLogo() {
  const { collapsed, mode } = useSelector((state: RootState) => state.app)
  const text = mode === 'side' ? !collapsed && <h1>{appConfig.name}</h1> : <h1>{appConfig.name}</h1>
  return (
    <a className="ra-logo" href="/">
      <img className="ra-logo-icon" src={logo} />
      {text}
    </a>
  )
}
