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

  const { mode } = useSelector((state: RootState) => state.app)
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
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
};

export default AppLayout;
