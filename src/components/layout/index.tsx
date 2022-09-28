import { Layout, Button } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

import AppHeader from './AppHeader'
import AppSider from './AppSider'
import AppBreadcrumb from './AppBreadcrumb'
import './index.less'

import { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { setAppState } from '@/store/modules/app'

const layoutType = [
  { type: 'top', title: '顶部菜单布局' },
  { type: 'mix', title: '混合菜单布局' }
]

const { Content } = Layout;

const AppLayout = () => {

  const { mode } = useSelector((state: RootState) => state.app)
  const dispatch = useDispatch()

  const patch = (state) => dispatch(setAppState(state))
  return (
    <div className={`ra-layout ra-layout-${mode}`}>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />
        <Layout>
          <AppSider />
          <Layout>
            <AppBreadcrumb />
            <Content className="ra-layout-content">
              <Outlet />
              {
                layoutType.map(v => (
                  <Button type='primary' key={v.type} onClick={() => patch({ mode: v.type })}>{v.title}</Button>
                ))
              }
              <h3>{mode}</h3>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
};

export default AppLayout;
