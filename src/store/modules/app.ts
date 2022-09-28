import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface AppState {
  mode?: 'mix' | 'top'
  collapsed?: boolean,
  menuList?: any[]
}

const initialState: AppState = {
  mode: 'mix',
  collapsed: false,
  menuList: []
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