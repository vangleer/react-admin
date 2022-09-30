import './index.less'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
export default function Login() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }
  const year = new Date().getFullYear()
  return (
    <div className="ra-login">
      <div className="ra-login-main">
        <div className="ra-login-box">
          <a className="ra-logo" href="/">
            <img className="ra-logo-icon" src="/logo.png" />
            <h1>React Admin</h1>
          </a>
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
                  <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
              </div>
              <div className="ra-login-form-item">
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>
              </div>
              <div className="ra-login-form-item">
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="ra-login-form-button">
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
