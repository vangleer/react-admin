import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface AppState {
  mode: 'mix' | 'top'
  collapsed: boolean
  menuList: any[]
  sideWidth: number
  headerHeight: number
}

const initialState: Partial<AppState> = {
  mode: 'mix',
  collapsed: false,
  menuList: [],
  sideWidth: 208,
  headerHeight: 48
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppState(state, action: PayloadAction<AppState>) {
      Object.keys(action.payload).forEach(key => {
        state[key] = action.payload[key]
      })
    }
  }
})

export const { setAppState } = appSlice.actions

export default appSlice.reducer