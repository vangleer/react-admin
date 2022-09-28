import { Layout, Menu } from 'antd';
import React from 'react';
import './index.less'

const { Header } = Layout;
export default function AppHeader(props) {
  return (
    <>
      <Header style={{ height: 48, lineHeight: 48, background: 'transparent' }}>
      </Header>
      <Header className="ra-layout-header">
        <div className='ra-layout-header-left'>
          <a className='ra-logo' href="/">
            <h1>React Admin</h1>
          </a>
        </div>

        {props.mode === 'top' && <div className='ra-layout-header-nav'>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              borderBottom: 0
            }}
            items={props.items2}
          />
        </div>}

        <div className='ra-layout-header-right'>
          right
        </div>
      </Header>
    </>
  )
}