import { Menu } from 'antd'
import { menuList } from '@/router'
import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AppMenu() {
  const { mode, headerHeight, routePath } = useSelector((state: RootState) => state.app)
  const menuMode = mode === 'top' ? 'horizontal' : 'inline'
  const style =
    mode === 'top'
      ? { borderBottom: 0, height: headerHeight, lineHeight: headerHeight + 'px' }
      : {
          height: '100%',
          borderRight: 0
        }
  const navigate = useNavigate()
  const handleClick = ({ key }) => {
    navigate(key)
  }
  const defaultKeys = routePath.map((v) => v.path)
  return (
    defaultKeys.length && (
      <div className="ra-layout-header-nav">
        <Menu
          mode={menuMode}
          theme={mode === 'side' ? 'dark' : 'light'}
          defaultSelectedKeys={defaultKeys}
          defaultOpenKeys={mode === 'top' ? [] : defaultKeys.slice(0, -1)}
          style={style}
          items={menuList}
          onClick={handleClick}
        />
      </div>
    )
  )
}
