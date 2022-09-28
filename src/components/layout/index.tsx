import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { menuList } from '@/router'
import AppHeader from './AppHeader'
import AppSider from './AppSider'
import AppBreadcrumb from './AppBreadcrumb'
import './index.less'

const layoutType = [
  { type: 'top', title: '顶部菜单布局' },
  { type: 'mix', title: '混合菜单布局' }
]

const { Content, Sider } = Layout;

// [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [mode, setMode] = useState<any>('inline')
  const items2 = menuList
  return (
    <div className={`ra-layout ra-layout-${mode}`}>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader mode={mode} items={items2} />
        <Layout>
          <AppSider collapsed={collapsed} mode={mode} setCollapsed={setCollapsed} items2={items2} />
          <Layout>
            <AppBreadcrumb />
            <Content className="ra-layout-content">
              <Outlet />
              {/* {
                layoutType.map(v => (
                  <Button type='primary' onClick={() => setMode(v.type)}>{v.title}</Button>
                ))
              }
              {
                new Array(100).fill('content').map(v => (
                  <div style={{ margin: 20 }}>{v}</div>
                ))
              } */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
};

export default AppLayout;
