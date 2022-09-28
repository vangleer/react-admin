import { Layout, Menu } from 'antd';
import React from 'react';
import AppMenu from './AppMenu'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

const { Header } = Layout;
export default function AppHeader() {
  const { mode, menuList } = useSelector((state: RootState) => state.app)
  return (
    <>
      <Header style={{ height: 48, lineHeight: 48, background: 'transparent' }}>
      </Header>
      <Header className="ra-layout-header">
        <div className='ra-layout-header-left'>
          <a className='ra-logo' href="/">
            <h1>React Admin</h1>
          </a>
        </div>

        {mode === 'top' && <div className='ra-layout-header-nav'>
          <AppMenu />
        </div>}

        <div className='ra-layout-header-right'>
          right
        </div>
      </Header>
    </>
  )
}