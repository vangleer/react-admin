import { useEffect } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import ruoter, { findRoutePath } from '@/router'
import { setAppState } from '@/store/modules/app'
import { useDispatch } from 'react-redux'
function App() {
  const location = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    const routePath = findRoutePath(location.pathname)
    dispatch(setAppState({ routePath } as any))
    return () => {

    }
  }, [location.pathname, dispatch])
  return (
    <div className='ra-app'>
      {useRoutes(ruoter)}
    </div>
  )
}

export default App
