import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Button } from 'antd'
import React from 'react'
import AppMenu from './AppMenu'
import { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { setAppState } from '@/store/modules/app'
import AppLogo from './AppLogo'
const { Sider } = Layout;
export default function AppSider() {
  const { mode, collapsed, sideWidth, headerHeight } = useSelector((state: RootState) => state.app)
  const dispatch = useDispatch()
  const patch = (state) => dispatch(setAppState(state))

  return (
    <>
      <div style={{ width: collapsed ? headerHeight : sideWidth }} className='ra-layout-sider-ghost'></div>
      {
        mode !== 'top' && <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={collapsed => patch({ collapsed })}
          collapsedWidth={headerHeight}
          theme="light"
          width={sideWidth}
          style={{ paddingTop: mode === 'side' ? 0 : headerHeight }}
          className="ra-layout-sider"
          trigger={<Button style={{ width: 48, height: 48, color: mode === 'side' ? '#fff' : '' }} type={collapsed ? 'link' : 'text'} icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />}
        >
          {mode === 'side' && <AppLogo />}
          <AppMenu />
        </Sider>
      }
    </>
  )
}