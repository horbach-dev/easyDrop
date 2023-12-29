import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { EditOutlined,UserOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'

import './Sidebar.scss'

interface IProps {
  collapsed: boolean
}

const Sidebar = ({ collapsed }: IProps) => {
  const {  pathname  } = useLocation()
  const navigate = useNavigate()

  console.log('pathname', pathname)

  const handleChangePath = ({ key }) => {
    console.log('key', key)
    navigate(key)
  }

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className='sidebar'
    >
      <div className='demo-logo-vertical' />
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        onClick={handleChangePath}
        openKeys={[pathname]}
        items={[
          {
            key: '/admin',
            icon: <UserOutlined />,
            label: 'Дашборд',
          },
          {
            key: '/admin/frontend',
            icon: <EditOutlined />,
            label: 'Фронтенд',
          },
        ]}
      />
    </Layout.Sider>
  )
}

export default Sidebar
