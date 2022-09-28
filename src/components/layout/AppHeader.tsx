import { Layout, Menu } from 'antd';
import React from 'react';
import AppMenu from './AppMenu'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

const { Header } = Layout;
export default function AppHeader() {
  const { mode, headerHeight } = useSelector((state: RootState) => state.app)

  const style = {
    height: headerHeight, lineHeight: headerHeight
  }
  return (
    <>
      <Header style={{ ...style, background: 'transparent' }}>
      </Header>
      <Header className="ra-layout-header" style={style}>
        <div className='ra-layout-header-left'>
          <a className='ra-logo' href="/">
            <h1>React Admin</h1>
          </a>
        </div>

        {mode === 'top' && <AppMenu />}

        <div className='ra-layout-header-right'>
          right
        </div>
      </Header>
    </>
  )
}