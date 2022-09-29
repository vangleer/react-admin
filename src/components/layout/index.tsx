import { Layout } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

import AppHeader from './AppHeader'
import AppSider from './AppSider'
import AppBreadcrumb from './AppBreadcrumb'
import './index.less'

import { RootState } from '@/store'
import { useSelector } from 'react-redux'

const { Content } = Layout;

const AppLayout = () => {

  const { mode, collapsed } = useSelector((state: RootState) => state.app)
  const className = `ra-layout ra-layout-${mode}${collapsed ? ' is-collapsed' : ''}`
  return (
    <div className={className}>
      <Layout style={{ minHeight: '100vh' }}>
        {mode !== 'side' && <AppHeader />}
        <Layout>
          <AppSider />
          <Layout>
            {mode === 'side' && <AppHeader />}
            <AppBreadcrumb />
            <Content className="ra-layout-content">
              <Outlet />
              {
                new Array(100).fill('content').map(v => (
                  <div style={{ margin: 20 }}>{v}</div>
                ))
              }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
};

export default AppLayout;
