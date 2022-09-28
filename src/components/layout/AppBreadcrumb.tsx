import { Breadcrumb } from 'antd';
import React from 'react';
import './index.less'

export default function AppBreadcrumb() {
  return <>
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
  </>
}