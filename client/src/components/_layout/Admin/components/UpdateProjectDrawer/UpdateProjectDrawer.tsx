import React, { useEffect, useState } from 'react'
import { Button, Drawer, Form, Input, InputNumber, message, Select, Slider, Space } from 'antd'
import ProjectApi from '$api/project'
import useStore from '../../../../../hooks/useStore'
import ContentStore from '../../../../../stores/ContentStore'

interface IProps {
  onClose: any
  open: boolean
  project: any
}

const UpdateProjectDrawer = ({ onClose, open, project }: IProps) => {
  const [projects] = useStore(ContentStore, store => store.projects || [])
  const [projectData, setProjectData] = useState({})
  const [isLoading, setLoading] = useState(false)

  console.log(projects)

  const submit = () => {
    setLoading(true)

    console.log(projectData)

    ProjectApi.updateUserProject(projectData)
      .then(() => {
        onClose()
      })
      .catch((err) => message.error(err.response.data.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    setLoading(true)

    if (project?.id) {
      ProjectApi.getUserProjectById(project.id)
        .then(res => {
          setProjectData(res.data)
          console.log(res.data)
        })
        .finally(() => setLoading(false))
    }
  }, [project])

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
      {(!isLoading || projectData?.name) && (
        <Form
          disabled={isLoading}
          layout='vertical'
          initialValues={projectData}
        >
          <Form.Item
            name='name'
            label='Name'
            rules={[{ required: true, message: 'Please enter user name' }]}
          >
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder='Search to Select'
              optionFilterProp='children'
              onChange={(value) => setProjectData({ ...projectData, name: value })
              }
              // filterOption={(input, option) =>
              //   (option?.value.toLowerCase() ?? '').includes(input.toLowerCase())}
              // filterSort={(optionA, optionB) =>
              //   (optionA?.value ?? '').toLowerCase().localeCompare((optionB?.value ?? '').toLowerCase())
              // }
              options={projects.map(item => ({ label: item.title, value: item.title }))}
            />
            {/*<Input*/}
            {/*  name='name'*/}
            {/*  placeholder='Please enter user name'*/}
            {/*  onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}*/}
            {/*/>*/}
          </Form.Item>
          <Form.Item
            name='accountCount'
            label='Account count'
            rules={[{ required: true, message: 'Please enter number of accounts' }]}
          >
            <InputNumber
              onChange={(value) => setProjectData({ ...projectData, accountCount: value })}
            />
          </Form.Item>
          <Form.Item
            name='progress'
            label='Account progress'
            rules={[{ required: true, message: 'Please enter account progress' }]}
          >
            <Slider
              onChangeComplete={(value) => setProjectData({ ...projectData, progress: value })}
              onChange={(value) => setProjectData({ ...projectData, progress: value })}
            />
          </Form.Item>
          <Form.Item
            name='averageInvestment'
            label='average investment'
            rules={[{ required: true, message: 'Please enter average investment' }]}
          >
            <InputNumber
              onChange={(value) => setProjectData({ ...projectData, averageInvestment: value })}
            />
          </Form.Item>
          <Form.Item
            name='expectedIncome'
            label='expected income'
            rules={[{ required: true, message: 'Please enter expected income' }]}
          >
            <InputNumber
              onChange={(value) => setProjectData({ ...projectData, expectedIncome: value })}
            />
          </Form.Item>
        </Form>
      )}
    </Drawer>
  )
}

export default UpdateProjectDrawer
