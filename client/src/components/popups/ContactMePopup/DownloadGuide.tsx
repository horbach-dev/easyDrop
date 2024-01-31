import React, { useState } from 'react'
import { Form, message, Space, Spin } from 'antd'
import classnames from 'classnames'
import Button from '$components/_shared/Button'
import Input from '$components/_shared/Form/Input'
import DownloadIcon from '$components/_shared/icons/DownloadIcon'
import Title from '$components/_shared/Title'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'
import PopupStore from '$stores/PopupStore'

import './DownloadGuide.scss'

const DownloadGuide = () => {
  const [store] = useStore(PopupStore, store => store)
  const [telegram] = useStore(ContentStore, store => store.telegram)
  const [isLoading, setLoading] = useState(false)
  const [isCompleted, setCompleted] = useState(false)
  const [form] = Form.useForm()

  const { payload } = store.queue.find(i => i.name === store.active) || { payload: { form: {}, title: {} } }

  const onFinish = (values) => {
    setLoading(true)

    const val = { ...values, ...payload.form }

    const text = Object.keys(val).map(key => {
      if (key === 'projects') {
        const pro = Object.keys(val[key]).map(k => `${k}: ${val[key][k]} акк, `)

        return `Проекты: ${pro.join(' ')} \n\n`
      }

      if (key === 'invest' || key === 'profit' || key === 'prob') {
        return `${val[key]} \n\n`
      }

      if (key === 'name') {
        return `Имя: ${val[key]} \n\n`
      }

      if (key === 'telegram') {
        return `Телеграм: ${val[key]} \n\n`
      }

      if (key === 'phone') {
        return `Телефон: ${val[key]} \n\n`
      }

      return `${key}: ${val[key]} \n\n`
    }).join(' ').replace(/_/g, '')

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegram.chatId,
        text,
        parse_mode: 'Markdown',
      })
    }

    fetch(`https://api.telegram.org/bot${telegram.botId}/sendMessage`, options)
      .then(response => response.json())
      .then(() => {
        setCompleted(true)
      })
      .catch(error => console.error('Ошибка при запросе:', error))
      .finally(() => setLoading(false))
  }

  const onFinishFailed = () => {
    message.error('Ошибка заполенения формы!')
  }

  const currentTitle = payload.title ? payload.title : 'Download the guide on how to get an airdrop'

  return (
    <div className={classnames('download-guild', isLoading && 'download-guild_loading')}>
      {isCompleted ? (
        <div className='download-guild__completed'>
          <Title center>
            {'Ваша заявка успешно отправлена!'}
          </Title>
          <Button toHref='https://telegram.org/'>
            {'Перейти в телеграм канал'}
          </Button>
        </div>
        ) : (
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
              name='name'
              label='Ваше имя'
            />
              <Input
              className='form__item'
              name='phone'
              label='Введите телефон'
              rules={[
                {
                  required: true,
                  message: 'Укажите Ваш телефон',
                },
              ]}
            />
              <Input
              className='form__item'
              name='email'
              label='Введите email'
              rules={[
                {
                  type: 'email',
                  message: 'Введите корректный E-mail',
                },
                {
                  required: true,
                  message: 'Укажите E-mail',
                },
              ]}
            />
              <Input
              className='form__item'
              name='telegram'
              label='Введите телеграм'
              rules={[
                {
                  required: true,
                  message: 'Укажите Ваш телеграм',
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
                    {'Download instructions'}
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
        )}
    </div>
  )
}

export default DownloadGuide
