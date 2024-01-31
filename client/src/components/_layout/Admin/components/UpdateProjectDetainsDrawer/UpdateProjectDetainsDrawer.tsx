import React, { useEffect, useState } from 'react'
import { Button, ColorPicker, Drawer, Form, Input, InputNumber, message, Radio, Space } from 'antd'
import ProjectApi from '$api/project'
interface IProps {
  onClose: any
  open: boolean
  projectDetails: any
}

const UpdateProjectDetainsDrawer = ({ onClose, open, projectDetails }: IProps) => {
  const [projectDetailsData, setProjectDetailsData] = useState({})
  const [isLoading, setLoading] = useState(false)

  const submit = () => {
    setLoading(true)

    ProjectApi.updateProjectDetails(projectDetailsData)
      .then(() => {
        onClose()
      })
      .catch((err) => message.error(err.response.data.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    setLoading(true)

    if (projectDetails?.id) {
      ProjectApi.getProjectDetailsById(projectDetails.id)
        .then(res => {
          setProjectDetailsData(res.data)
          console.log(res.data)
        })
        .finally(() => setLoading(false))
    }
  }, [projectDetails])

  return (
    <Drawer
      title='Update project details'
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
      {(!isLoading || projectDetailsData?.name) && (
        <Form
          disabled={isLoading}
          layout='vertical'
          initialValues={projectDetailsData}
        >
          <Form.Item
            name='label'
            label='label'
            rules={[{ required: true, message: 'Please enter number of accounts' }]}
          >
            <Input
              disabled={true}
              // onChange={(value) => setProjectDetailsData({ ...projectDetailsData, label: value })}
              defaultValue=''
            />
          </Form.Item>
          <Form.Item
            name='logo'
            label='logo'
            rules={[{ required: true, message: 'Please enter number of accounts' }]}
          >
            <Input
              disabled={true}
              // onChange={(value) => setProjectDetailsData({ ...projectDetailsData, logo: value })}
              defaultValue=''
            />
          </Form.Item>
          <Form.Item
            name='color'
            label='color'
            rules={[{ required: true, message: 'Please enter number of accounts' }]}
          >
            <ColorPicker
              defaultValue='#1677ff'
              defaultFormat='hex'
              disabledAlpha={true}
              size='small'
              showText
              onChange={(value) => setProjectDetailsData({ ...projectDetailsData, color: value.toHexString() })
              }
            />
          </Form.Item>
          <Form.Item
            name='price'
            label='price'
            rules={[{ required: true, message: 'Please enter number of accounts' }]}
          >
            <InputNumber
              onChange={(value) => setProjectDetailsData({ ...projectDetailsData, price: value })}
              defaultValue={0}
            />
          </Form.Item>
          <Form.Item
            name='active'
            label='active'
            rules={[{ required: true, message: 'Please enter number of accounts' }]}
          >
            <Radio.Group
              onChange={(value) => setProjectDetailsData({ ...projectDetailsData, active: value.target.value })}
              defaultValue={true}
            >
              <Radio.Button value={true}>
                {'Active'}
              </Radio.Button>
              <Radio.Button value={false}>
                {'Not active'}
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name='tokenNet'
            label='token net'
            rules={[{ required: true, message: 'Please enter number of accounts' }]}
          >
            <Input
              onChange={(value) => setProjectDetailsData({ ...projectDetailsData, tokenNet: value.target.value })}
              defaultValue=''
            />
          </Form.Item>
          <Form.Item
            name='listing'
            label='listing'
            rules={[{ required: true, message: 'Please enter number of accounts' }]}
          >
            <Input
              onChange={(value) => setProjectDetailsData({ ...projectDetailsData, listing: value.target.value })}
              defaultValue=''
            />
          </Form.Item>
          <Form.Item
            name='stableCoin'
            label='stable coin'
            rules={[{ required: true, message: 'Please enter number of accounts' }]}
          >
            <Input
              onChange={(value) => setProjectDetailsData({ ...projectDetailsData, stableCoin: value.target.value })}
              defaultValue=''
            />
          </Form.Item>
          <Form.Item
            name='collectNet'
            label='collect net'
            rules={[{ required: true, message: 'Please enter number of accounts' }]}
          >
            <Input
              onChange={(value) => setProjectDetailsData({ ...projectDetailsData, collectNet: value.target.value })}
              defaultValue=''
            />
          </Form.Item>
          <Form.Item
            name='commission'
            label='commission'
            rules={[{ required: true, message: 'Please enter number of accounts' }]}
          >
            <InputNumber
              onChange={(value) => setProjectDetailsData({ ...projectDetailsData, commission: value })}
              defaultValue={0}
            />
          </Form.Item>
          <Form.Item
            name='vesting'
            label='vesting'
            rules={[{ required: true, message: 'Please enter number of accounts' }]}
          >
            <Input
              onChange={(value) => setProjectDetailsData({ ...projectDetailsData, vesting: value.target.value })}
              defaultValue=''
            />
          </Form.Item>
        </Form>
      )}
    </Drawer>
  )
}

export default UpdateProjectDetainsDrawer
