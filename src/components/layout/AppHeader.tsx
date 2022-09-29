import { Layout, Dropdown, Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppMenu from './AppMenu'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import AppSettings from './AppSettings'
import AppLogo from './AppLogo'
import UserImg from '../../assets/images/user.png'
const { Header } = Layout
export default function AppHeader() {
  const { mode, headerHeight } = useSelector((state: RootState) => state.app)

  const style = {
    height: headerHeight, lineHeight: headerHeight + 'px'
  }
  const navigate = useNavigate()
  const handleClick = ({ key }) => {
    switch (key) {
      case 'logout':
        return navigate('/login', { replace: false })
    }
  }
  const menu = <Menu onClick={handleClick} items={[
    {
      label: '退出登录',
      key: 'logout',
    }
  ]} />
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
          <Dropdown overlay={menu}>
            <a className='ra-user-box' onClick={e => e.preventDefault()}>
              <img src={UserImg} />
              <span>Admin</span>
            </a>
          </Dropdown>
        </div>
      </Header>
    </>
  )
}