import React, { useState } from 'react'
import { Button, Drawer } from 'antd'
import { SettingOutlined, CheckOutlined } from '@ant-design/icons'

import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { usePatch } from '@/store/modules/app'
import { colors, layouts } from '@/config'

export default function AppSettings() {
  const { mode, primaryColor } = useSelector((state: RootState) => state.app)
  const patch = usePatch()
  const [open, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
  }
  const handleClick = () => {
    setOpen(true)
  }
  return (
    <>
      <Button type="primary" icon={<SettingOutlined />} onClick={handleClick} />
      <Drawer
        title={null}
        closable={false}
        width={300}
        placement="right"
        open={open}
        onClose={onClose}
      >
        <div className="ra-settings-content">
          <div style={{ marginBottom: 24 }}>
            <h3>导航模式</h3>
            <div className="ra-settings-block">
              {layouts.map((v) => (
                <div
                  key={v.value}
                  className={'ra-settings-layout-block-' + v.value}
                  onClick={() => patch({ mode: v.value })}
                >
                  {mode === v.value && <CheckOutlined className="ra-check-icon" />}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 24 }}>
            <h3>主题色</h3>
            <div className="ra-settings-block">
              {colors.map((v) => (
                <div
                  key={v.value}
                  className="theme-color-block"
                  style={{ backgroundColor: v.value }}
                  onClick={() => patch({ primaryColor: v.value })}
                >
                  {primaryColor === v.value && <CheckOutlined className="ra-check-icon" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}
