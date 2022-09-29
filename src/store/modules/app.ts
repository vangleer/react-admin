import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ConfigProvider } from 'antd'
import { colors, layouts } from '@/config'
export type RoutePathType = {
  path: string,
  label: string
}
export interface AppState {
  mode: 'mix' | 'top'
  primaryColor: string,
  collapsed: boolean
  menuList: any[]
  sideWidth: number
  headerHeight: number,
  routePath: RoutePathType[]
}

const initialState: Partial<AppState> = {
  mode: layouts[0].value,
  primaryColor: colors[0].value,
  collapsed: false,
  menuList: [],
  sideWidth: 208,
  headerHeight: 48,
  routePath: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppState(state, action: PayloadAction<AppState>) {
      Object.keys(action.payload).forEach(key => {
        state[key] = action.payload[key]

        if (key === 'primaryColor') {
          // 配置主题颜色
          ConfigProvider.config({
            theme: {
              primaryColor: state[key]
            }
          })
        }

      })
    }
  }
})

export const { setAppState } = appSlice.actions

export default appSlice.reducer
