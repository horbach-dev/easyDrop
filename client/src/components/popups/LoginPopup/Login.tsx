import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, message, Space, Spin } from 'antd'
import classnames from 'classnames'
import UserActions from '$actions/User'
import UserApi from '$api/user'
import Button from '$components/_shared/Button'
import Input from '$components/_shared/Form/Input'
import DownloadIcon from '$components/_shared/icons/DownloadIcon'
import Title from '$components/_shared/Title'
import useStore from '$hooks/useStore'
import PopupStore from '$stores/PopupStore'

import './Login.scss'
import { PopupActions } from '$actions/PopupActions'
import LocaleStore from '$stores/LocaleStore'

const Login = () => {
  const [store] = useStore(PopupStore, store => store)
  const [locale] = useStore(LocaleStore, store => store.locale)
  const [isLoading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const nav = useNavigate()

  const { payload } = store.queue.find(i => i.name === store.active) || { payload: { form: {}, title: {} } }

  const onFinish = (values) => {
    setLoading(true)

    const val = { ...values, ...payload.form }

    UserApi.login({
      username: val.login,
      password: val.password
    })
      .then((userData) => UserActions.initUserStore(userData.data.user))
      .then(() => PopupActions.hidePopup())
      .then(() => nav(`/${locale}/profile`))
      .catch(() => message.error('Invalid Login or Password'))
      .finally(() => setLoading(false))
  }

  const onFinishFailed = () => {
    message.error('Invalid Login or Password')
  }

  const currentTitle = payload.title ? payload.title : 'Authorization'

  return (
    <div className={classnames('download-guild', isLoading && 'download-guild_loading')}>
      <>
        <Title>
          {currentTitle}
        </Title>
        <Form
              disabled={isLoading}
              className='form download-guild__form'
              form={form}
              layout='vertical'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete='off'
            >
          <Input
                className='form__item'
                name='login'
                label='Login'
                rules={[
                  {
                    required: true,
                    message: 'Enter Your login',
                  },
                ]}
              />
          <Input
                className='form__item'
                name='password'
                label='Password'
                rules={[
                  {
                    required: true,
                    message: 'Enter Your password',

                  },
                ]}
              />
          <Form.Item className='download-guild-submit'>
            <Space>
              <Button
                    htmltype='submit'
                    disabled={isLoading}
                    icon={DownloadIcon}
                  >
                {'Login'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
        {isLoading && (
          <Spin
            size='large'
            className='form__loading'
          />
        )}
      </>
    </div>
  )
}

export default Login
