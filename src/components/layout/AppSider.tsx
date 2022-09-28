import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Button } from 'antd'
import React from 'react'
import AppMenu from './AppMenu'
import { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { setAppState } from '@/store/modules/app'
const { Sider } = Layout;
export default function AppSider() {
  const { mode, collapsed } = useSelector((state: RootState) => state.app)
  const dispatch = useDispatch()
  const patch = (state) => dispatch(setAppState(state))

  return (
    <>
      <div style={{ width: collapsed ? 48 : 208 }} className='ra-layout-sider-ghost'></div>
      {
        mode !== 'top' && <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={collapsed => patch({ collapsed })}
          collapsedWidth={48}
          theme="light"
          width={208}
          style={{ paddingTop: 48 }}
          className="ra-layout-sider"
          trigger={<Button style={{ width: 48, height: 48 }} type={collapsed ? 'link' : 'text'} icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />}
        >
          <AppMenu />
        </Sider>
      }
    </>
  )
}