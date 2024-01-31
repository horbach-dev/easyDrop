import React, { useEffect, useState } from 'react'
import { Button, Drawer, Form, Input, message, Radio, Space } from 'antd'
import UserApi from '$api/user'

interface IProps {
  onClose: any
  open: boolean
  user: any
}

const UpdateUserDrawer = ({ onClose, open, user }: IProps) => {
  const [userData, setUserData] = useState({})
  const [isLoading, setLoading] = useState(false)

  const submit = () => {
    setLoading(true)

    UserApi.updateUser(userData)
      .then(() => {
        onClose()
      })
      .catch((err) => message.error(err.response.data.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    setLoading(true)

    if (user?.id) {
      console.log(1)

      UserApi.getUserById(user.id)
        .then(res => setUserData(res.data))
        .finally(() => setLoading(false))
    }
  }, [user])

  useEffect(() => {
    console.log(userData)
  }, [userData])

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
            {'Submit'}
          </Button>
        </Space>
      )}
    >
      {!isLoading && (
        <Form
          disabled={isLoading}
          layout='vertical'
          initialValues={user}
        >
          <Form.Item
            name='name'
            label='Name'
            rules={[{ required: true, message: 'Please enter user name' }]}
          >
            <Input
              name='name'
              placeholder='Please enter user name'
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            name='password'
            label='Password'
            rules={[{ required: true, message: 'Please enter password' }]}
          >
            <Input
              name='password'
              placeholder='Please enter password'
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            name='active'
            label='active'
            rules={[{ required: true, message: 'Please enter number of accounts' }]}
          >
            <Radio.Group
              onChange={(value) => setUserData({ ...userData, isAdmin: value.target.value })}
              defaultValue={true}
            >
              <Radio.Button value={true}>
                {'Admin'}
              </Radio.Button>
              <Radio.Button value={false}>
                {'Not admin'}
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name='phone'
            label='phone'
            rules={[{ required: true, message: 'Please enter password' }]}
          >
            <Input
              name='phone'
              placeholder='Please enter password'
              onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            name='metamask'
            label='metamask'
            rules={[{ required: true, message: 'Please enter password' }]}
          >
            <Input
              name='metamask'
              placeholder='Please enter password'
              onChange={(e) => setUserData({ ...userData, metamask: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            name='telegram'
            label='telegram'
            rules={[{ required: true, message: 'Please enter password' }]}
          >
            <Input
              name='telegram'
              placeholder='Please enter password'
              onChange={(e) => setUserData({ ...userData, telegram: e.target.value })}
            />
          </Form.Item>
        </Form>
      )}
    </Drawer>
  )
}

export default UpdateUserDrawer
