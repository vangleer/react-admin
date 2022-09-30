import { Breadcrumb } from 'antd'
import React from 'react'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'
export default function AppBreadcrumb() {
  const { routePath } = useSelector((state: RootState) => state.app)
  const current: any = routePath.length ? routePath[routePath.length - 1] : {}
  return (
    <div className="ra-layout-breadcrumb">
      <Breadcrumb>
        {routePath.map((route) => (
          <Breadcrumb.Item key={route.path}>{route.label}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <div className="ra-layout-breadcrumb-heading">
        <div className="ra-layout-breadcrumb-heading-left">
          <span className="ra-layout-breadcrumb-heading-title">{current.label}</span>
        </div>
      </div>
    </div>
  )
}
