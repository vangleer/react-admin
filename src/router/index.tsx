import React, { lazy, Suspense } from 'react'
import { LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import Layout from '@/components/layout/index'
import { Spin } from 'antd'
import { RoutePathType } from '@/store/modules/app'
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
        index: true,
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
        index: true,
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
    component: lazy(() => import('@/views/login/index'))
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
      label: item.meta?.title,
      children: mapRoutes(item.children)
    }
  })
}

// 路由处理方式
const generateRouter = (routers: any) => {
  return routers.map((item: any) => {
    if (item.children) {
      item.children = generateRouter(item.children)
    }
    item.element = (
      <Suspense fallback={<Spin />}>
        {/* 把懒加载的异步路由变成组件装载进去 */}
        <item.component />
      </Suspense>
    )
    return item
  })
}

export const findRoutePath = (pathname): RoutePathType[] => {
  let arr: RoutePathType[] = []
  const findRoute = (routes, route?) => {
    if (route) {
      arr = [{ path: route.key, label: route.label }]
      if (route.key === pathname) return true
    }
    if (!routes) return
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i]
      arr.push({
        path: item.key,
        label: item.label
      })
      if (item.key === pathname) {
        return true
      } else {
        arr.pop()
      }
      if (item.children) findRoute(item.children)
    }
  }
  for (let i = 0; i < menuList.length; i++) {
    const route = menuList[i]
    const flag = findRoute(route.children, route)
    if (flag) return arr
  }
  return arr
}

export const menuList = mapRoutes(mainRoutes)

export default generateRouter(routes)
