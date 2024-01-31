import React, { useEffect, useState } from 'react'
import { Button, Drawer, Form, Input, InputNumber, message, Select, Slider, Space } from 'antd'
import ProjectApi from '$api/project'
import useStore from '../../../../../hooks/useStore'
import ContentStore from '../../../../../stores/ContentStore'

interface IProps {
  onClose: any
  open: boolean
  userId: string
}

const CreateProjectDrawer = ({ onClose, open, userId }: IProps) => {
  const [projects] = useStore(ContentStore, store => store.projects || [])
  const [isLoading, setLoading] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [accountCount, setAccountCount] = useState(0)
  const [progress, setProgress] = useState(0)
  const [averageInvestment, setAverageInvestment] = useState(0)
  const [expectedIncome, setExpectedIncome] = useState(0)

  const submit = () => {
    setLoading(true)

    ProjectApi.createUserProject(userId, {
      name: projectName, accountCount,
      progress,
      averageInvestment,
      expectedIncome
    })
      .then(() => {
        onClose()
      })
      .catch((err) => message.error(err.response.data.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    setProjectName('')
    setAccountCount(0)
    setProgress(0)
    setAverageInvestment(0)
    setExpectedIncome(0)
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
          name: projectName,
        }}
      >
        <Form.Item
          name='project'
          label='Project name'
          rules={[{ required: true, message: 'Please enter user name' }]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder='Search to Select'
            optionFilterProp='children'
            onChange={(value) => setProjectName(value)}
            value={projectName}
            filterOption={(input, option) =>
              (option?.value.toLowerCase() ?? '').includes(input.toLowerCase())}
            filterSort={(optionA, optionB) =>
              (optionA?.value ?? '').toLowerCase().localeCompare((optionB?.value ?? '').toLowerCase())
            }
            options={projects.map(item => ({ label: item.title, value: item.title }))}
          />
        </Form.Item>
        <Form.Item
          name='accountCount'
          label='Account count'
          rules={[{ required: true, message: 'Please enter number of accounts' }]}
        >
          <InputNumber
            onChange={(value) => setAccountCount(value)}
            value={accountCount}
            defaultValue={0}
          />
        </Form.Item>
        <Form.Item
          name='progress'
          label='Account progress'
          rules={[{ required: true, message: 'Please enter account progress' }]}
        >
          <Slider
            value={progress}
            onChangeComplete={(value) => setProgress(value)}
            onChange={(value) => setProgress(value)}
          />
        </Form.Item>
        <Form.Item
          name='averageInvestment'
          label='average investment'
          rules={[{ required: true, message: 'Please enter average investment' }]}
        >
          <InputNumber
            value={averageInvestment}
            defaultValue={0}
            onChange={(value) => setAverageInvestment(value)}
          />
        </Form.Item>
        <Form.Item
          name='expectedIncome'
          label='expected income'
          rules={[{ required: true, message: 'Please enter expected income' }]}
        >
          <InputNumber
            value={expectedIncome}
            defaultValue={0}
            onChange={(value) => setExpectedIncome(value)}
          />
        </Form.Item>
      </Form>
    </Drawer>
  )
}

export default CreateProjectDrawer
