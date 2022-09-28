import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import React from 'react';
import './index.less'

const { Sider } = Layout;
export default function AppSider(props) {
  const { collapsed, setCollapsed, mode, items2 } = props
  return (
    <>
      <div style={{ width: collapsed ? 48 : 208 }} className='ra-layout-sider-ghost'></div>
      {
        mode !== 'top' && <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
          collapsedWidth={48}
          theme="light"
          width={208}
          style={{ paddingTop: 48 }}
          className="ra-layout-sider"
          trigger={<Button style={{ width: 48, height: 48 }} type={collapsed ? 'link' : 'text'} icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />}
        >
          {
            mode === 'side' && <div className='ra-layout-sider-logo'>
              <a className='ra-logo' href="/">
                <h1>React Admin</h1>
              </a>
            </div>
          }
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0
            }}
            items={items2}
          />
        </Sider>
      }
    </>
  )
}