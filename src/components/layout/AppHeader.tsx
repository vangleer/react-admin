import { Layout } from 'antd'
import React from 'react';
import AppMenu from './AppMenu'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import AppSettings from './AppSettings'
import AppLogo from './AppLogo'
const { Header } = Layout;
export default function AppHeader() {
  const { mode, headerHeight } = useSelector((state: RootState) => state.app)

  const style = {
    height: headerHeight, lineHeight: headerHeight + 'px'
  }
  return (
    <>
      {
        mode !== 'side' && <Header style={{ ...style, background: 'transparent' }} />
      }
      <Header className="ra-layout-header" style={style}>
        <div className='ra-layout-header-left'>
          {mode !== 'side' && <AppLogo />}
        </div>
        {mode === 'top' && <AppMenu />}
        <div className='ra-layout-header-right'>
          <AppSettings />
        </div>
      </Header>
    </>
  )
}