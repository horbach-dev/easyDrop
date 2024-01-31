import React, { useState } from 'react'
import { Button, Drawer, Form, Input, message, Space } from 'antd'
import UserApi from '$api/user'

interface IProps {
  onClose: any
  open: boolean
}

const CreateUserDrawer = ({ onClose, open }: IProps) => {
  const [isLoading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = () => {
    setLoading(true)

    UserApi.createUser({ username, password })
      .then(() => {
        onClose()
      })
      .catch((err) => message.error(err.response.data.message))
      .finally(() => setLoading(false))
  }

  return (
    <Drawer
      title='Create a new account'
      width={720}
      onClose={onClose}
      open={open}
      styles={{
        body: {
          paddingBottom: 80,
        },
      }}
      extra={(
        <Space>
          <Button onClick={onClose}>
            {'Cancel'}
          </Button>
          <Button
            onClick={submit}
            type='primary'>
            {'Submit\r'}
          </Button>
        </Space>
      )}
    >
      <Form
        disabled={isLoading}
        form={form}
        layout='vertical'
      >
        <Form.Item
          name='username'
          label='Username'
          rules={[{ required: true, message: 'Please enter user name' }]}
        >
          <Input
            placeholder='Please enter user name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'
          rules={[{ required: true, message: 'Please enter password' }]}
        >
          <Input
            placeholder='Please enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Drawer>
  )
}

export default CreateUserDrawer
