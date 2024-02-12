import React, { useEffect, useState } from 'react'
import { Button, Drawer, Form, Input, InputNumber, message, Select, Space } from 'antd'
import AccountApi from '$api/account'

interface IProps {
  onClose: any
  open: boolean
  project: any
}

const CreateAccountDrawer = ({ onClose, open, project }: IProps) => {
  const [isLoading, setLoading] = useState(false)
  const [wallet, setWallet] = useState('')
  const [runs, setRuns] = useState(0)

  const submit = () => {
    setLoading(true)

    AccountApi.createAccount({
      projectId: project.id,
      runs,
      wallet
    })
      .then(() => {
        onClose()
      })
      .catch((err) => message.error(err.response.data.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    setWallet('')
    setRuns(0)
  }, [open])

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
        layout='vertical'
        initialValues={{
          project: project?.name,
        }}
      >
        <Form.Item
          name='project'
          label='Project'
          rules={[{ required: true, message: 'Please enter project' }]}
        >
          <Input
            disabled={true}
            placeholder='Please enter wallet'
            value={project.name}
            // onChange={(e) => setWallet(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name='wallet'
          label='Wallet'
          rules={[{ required: true, message: 'Please enter wallet' }]}
        >
          <Input
            placeholder='Please enter wallet'
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name='runs'
          label='Runs'
          rules={[{ required: true, message: 'Please enter number of accounts' }]}
        >
          <InputNumber
            onChange={(value) => setRuns(value)}
            value={runs}
            defaultValue={0}
          />
        </Form.Item>
      </Form>
    </Drawer>
  )
}

export default CreateAccountDrawer
