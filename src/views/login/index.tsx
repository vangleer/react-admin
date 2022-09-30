import './index.less'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '@/store/modules/app'
import { useDispatch } from 'react-redux'
import { appConfig } from '@/config'
import logo from '@/assets/images/logo.png'
type LoginType = {
  username: string
  password: string
}
export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onFinish = (values: LoginType) => {
    const { username } = values
    if (username !== 'admin' && username !== 'vangle') {
      return message.warn('用户名或密码有误！')
    }
    setLoading(true)
    setTimeout(() => {
      const token = `${username}.${new Date().toString()}`
      const user = { token, username }
      dispatch(login(user))
      setLoading(false)
      navigate('/home', { replace: true })
    }, 1000)
  }
  const year = new Date().getFullYear()
  return (
    <div className="ra-login">
      <div className="ra-login-main">
        <div className="ra-login-box">
          <div className="ra-logo">
            <img className="ra-logo-icon" src={logo} />
            <h1>{appConfig.name}</h1>
          </div>
          <div className="ra-logo-form">
            <Form
              name="normal_login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              size="large"
            >
              <div className="ra-login-form-item">
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                  <Input prefix={<UserOutlined />} placeholder="用户名: admin or vangle" />
                </Form.Item>
              </div>
              <div className="ra-login-form-item">
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input prefix={<LockOutlined />} type="password" placeholder="密码: any" />
                </Form.Item>
              </div>
              <div className="ra-login-form-item">
                <Form.Item>
                  <Button type="primary" loading={loading} htmlType="submit" className="ra-login-form-button">
                    登 录
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <footer className="ra-login-footer">
        <span>版权所有©{year}保留所有权利</span>
      </footer>
    </div>
  )
}
