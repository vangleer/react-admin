import { Menu } from 'antd';
import React from 'react';
import { menuList } from '@/router'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

export default function AppMenu() {
  const { mode, headerHeight } = useSelector((state: RootState) => state.app)
  const menuMode = mode === 'top' ? 'horizontal' : 'inline'
  const style = mode === 'top' ? { borderBottom: 0, height: headerHeight, lineHeight: headerHeight + 'px' } : {
    height: '100%',
    borderRight: 0
  }

  return <div className='ra-layout-header-nav'>
    <Menu
      mode={menuMode}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={style}
      items={menuList}
    />
  </div>
}