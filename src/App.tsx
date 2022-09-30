import { useEffect } from 'react'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import ruoter, { findRoutePath } from '@/router'
import { logout, setAppState } from '@/store/modules/app'
import { useDispatch } from 'react-redux'
import { getToken } from './utils/auth'
function App() {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const patch = (state) => dispatch(setAppState(state))
  const token = getToken()
  useEffect(() => {
    if (location.pathname === '/login') {
      dispatch(logout())
      return
    } else if (!token) {
      return navigate('/login')
    }
    const routePath = findRoutePath(location.pathname)
    patch({ routePath })
    return () => { }
  }, [location.pathname])
  return <div className="ra-app">{useRoutes(ruoter)}</div>
}

export default App
