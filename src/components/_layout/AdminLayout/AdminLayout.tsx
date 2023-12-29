import React, { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Alert, Layout, Spin, theme } from 'antd'
import Header from '$components/_layout/Admin/components/Header'
import Sidebar from '$components/_layout/Admin/components/Sidebar'

import './AdminLayout.scss'

const { Content } = Layout

const Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken()

  return (
    <Layout className='admin-layout'>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
        <Content
          className='admin-layout__content'
          style={{
            marginLeft: collapsed ? 96 : 216,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
      >
          <Suspense
            fallback={(
              <div className='preloader'>
                <Spin tip='Loading...'>
                  <Alert
                    message='Alert message title'
                    description='Further details about the context of this alert.'
                    type='info'
                  />
                </Spin>
              </div>
            )}
          >
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Admin
