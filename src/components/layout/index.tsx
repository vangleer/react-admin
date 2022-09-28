import { LaptopOutlined, NotificationOutlined, UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Button } from 'antd';
import React, { useState } from 'react';
import './index.less'
const { Header, Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className='ra-layout ra-layout-mix'>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="ra-layout-header">
          <a className='ra-header-logo' href="/">
            <h1>React Admin</h1>
          </a>
        </Header>
        <Layout>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={value => setCollapsed(value)}
            collapsedWidth={48}
            theme="light"
            width={208}
            className="ra-layout-sider"
            trigger={<Button type="link" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout>
            <div className='ra-layout-breadcrumb'>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
              </Breadcrumb>

              <div className='ra-layout-breadcrumb-heading'>
                <div className='ra-layout-breadcrumb-heading-left'>
                  <span className='ra-layout-breadcrumb-heading-title'>页面标题</span>
                </div>
              </div>
            </div>

            <Content className="ra-layout-content">
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
};

export default AppLayout;
