import React, { useState } from 'react'
import { Form, message, Space } from 'antd'
import UserApi from '$api/user'
import Button from '$components/_shared/Button'
import Input from '$components/_shared/Form/Input'
import SaveIcon from '$components/_shared/icons/SaveIcon'
import Title from '$components/_shared/Title'
import useStore from '$hooks/useStore'
import UserStore from '$stores/UserStore'

import './Profile.scss'

const Profile = () => {
  const [userStore] = useStore(UserStore, store => store)
  const [isLoading, setLoading] = useState(false)

  const [user, setUser] = useState(userStore)

  const onFinish = (values) => {
    setLoading(true)

    console.log(values)

    UserApi.updateUser({
      id: userStore.id,
      ...values
    })
      .then(res => {
        setUser(res.data)
      })
      .finally(() => setLoading(false))
  }

  const onFinishFailed = () => {
    message.error('Error filling out the form!')
  }

  return (
    <section className='profile'>
      <div className='profile__content'>
        <div className='profile__text'>
          <Title>
            {'Profile'}
          </Title>
          <p>
            <Form
              disabled={isLoading}
              className='form'
              layout='vertical'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={user}
              autoComplete='off'
            >
              <div className='profile__form__row'>
                <Input
                  className='form__item'
                  disabled={isLoading}
                  name='name'
                  label='Name'
                  rules={[
                    {
                      message: 'Enter your login',
                    },
                  ]}
                />
                <Input
                  className='form__item'
                  disabled={isLoading}
                  name='phone'
                  label='Phone'
                  rules={[
                    {
                      message: 'Enter your password',
                    },
                  ]}
                />
              </div>
              <div className='profile__form__row'>
                <Input
                  disabled={isLoading}
                  className='form__item'
                  name='metamask'
                  label='Metamask wallet'
                  rules={[
                    {
                      message: 'Enter your metamask wallet',
                    },
                  ]}
                />
                <Input
                  disabled={isLoading}
                  className='form__item'
                  name='telegram'
                  label='Telegram'
                  rules={[
                    {
                      message: 'Enter your telegram',
                    },
                  ]}
                />
              </div>
              <Form.Item>
                <Space>
                  <Button
                    htmltype='submit'
                    disabled={isLoading}
                    icon={SaveIcon}
                  >
                    {'Save'}
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </p>
          {/*<div className='profile__image' />*/}
        </div>
      </div>
    </section>
  )
}

export default Profile
