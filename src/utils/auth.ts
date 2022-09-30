export const TokenKey = 'ra-token'

// 获取token
export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token: string) {
  localStorage.setItem(TokenKey, token)
}

// 删除token
export function removeToken() {
  localStorage.removeItem(TokenKey)
}
