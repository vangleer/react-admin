import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Layout from '@/components/layout/index'

export const mainRoutes = [
  {
    path: '/',
    component: Layout,
    meta: {
      title: '首页',
      icon: LaptopOutlined
    },
    children: [
      {
        path: '/home',
        component: lazy(() => import('@/views/home')),
        meta: {
          title: 'Home'
        }
      }
    ]
  },
  {
    path: '/goods',
    component: Layout,
    meta: {
      title: '商品',
      icon: NotificationOutlined
    },
    children: [
      {
        path: '/goods/info',
        component: lazy(() => import('@/views/goods/Info')),
        meta: {
          title: '商品详情'
        }
      },
      {
        path: '/goods/category',
        component: lazy(() => import('@/views/goods/Category')),
        meta: {
          title: '商品分类'
        }
      }
    ]
  }
]
const routes = [
  ...mainRoutes,
  {
    path: '/login',
    component: lazy(() => import('@/views/Login'))
  },
  {
    path: '*',
    component: lazy(() => import('@/views/NotFound'))
  }
]

function mapRoutes(routes) {
  if (!routes) return
  return routes.map((item, index) => {
    const key = item.path
    return {
      key: key,
      icon: item.meta?.icon && <item.meta.icon />,
      label: <Link to={item.path}>{item.meta?.title}</Link>,
      children: mapRoutes(item.children)
    };
  })
}



// 路由处理方式
const generateRouter = (routers: any) => {
  return routers.map((item: any) => {
    if (item.children) {
      item.children = generateRouter(item.children)
    }
    item.element = <Suspense fallback={
      <div>加载中...</div>
    }>
      {/* 把懒加载的异步路由变成组件装载进去 */}
      <item.component />
    </Suspense>
    return item
  })
}


export const menuList = mapRoutes(routes)

export default generateRouter(routes)