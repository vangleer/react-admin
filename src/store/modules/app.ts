import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ConfigProvider } from 'antd'
import { colors, layouts, LayoutModeType } from '@/config'
import { removeToken, setToken } from '@/utils/auth'
import { useDispatch } from 'react-redux'
export type RoutePathType = {
  path: string
  label: string
}
export type UserType = {
  username?: string
  token?: string
}
export interface AppState {
  mode: LayoutModeType
  primaryColor: string
  collapsed: boolean
  menuList: any[]
  sideWidth: number
  headerHeight: number
  routePath: RoutePathType[]
  user: UserType
}
const user = (JSON.parse(localStorage.getItem('user') || null) as UserType) || {
  username: '',
  token: ''
}

const initialState: Partial<AppState> = {
  mode: layouts[0].value,
  primaryColor: colors[0].value,
  collapsed: false,
  menuList: [],
  sideWidth: 208,
  headerHeight: 48,
  routePath: [],
  user
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppState(state, action: PayloadAction<AppState>) {
      Object.keys(action.payload).forEach((key) => {
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
    },
    login(state, action: PayloadAction<UserType>) {
      setToken(action.payload.token)
      localStorage.setItem('user', JSON.stringify(action.payload))
      state.user = action.payload
    },
    logout(state) {
      removeToken()
      localStorage.removeItem('user')
      state.user = {
        username: '',
        token: ''
      }
    }
  }
})

export const { setAppState, login, logout } = appSlice.actions

export const usePatch = () => {
  const dispatch = useDispatch()
  const patch = (state) => dispatch(setAppState(state))
  return patch
}

export default appSlice.reducer
