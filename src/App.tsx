import { useRoutes } from 'react-router-dom'
import ruoter from '@/router'

function App() {
  return (
    <div className='ra-app'>
      {useRoutes(ruoter)}
    </div>
  )
}

export default App
