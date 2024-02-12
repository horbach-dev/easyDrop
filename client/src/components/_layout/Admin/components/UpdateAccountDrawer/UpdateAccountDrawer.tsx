import React, { useEffect, useState } from 'react'
import { Button, Drawer, Form, Input, InputNumber, message, Select, Space } from 'antd'
import AccountApi from '$api/account'

interface IProps {
  onClose: any
  open: boolean
  account: any
}

const UpdateAccountDrawer = ({ onClose, open, account }: IProps) => {
  const [isLoading, setLoading] = useState(false)
  const [wallet, setWallet] = useState(account.wallet)
  const [runs, setRuns] = useState(account.runs)

  const submit = () => {
    setLoading(true)

    AccountApi.updateAccount({
      id: account.id,
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
    setWallet(account.wallet)
    setRuns(account.runs)
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
          wallet: account.wallet,
          runs: account.runs,
          project: account?.Project?.name
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

export default UpdateAccountDrawer
