import React from 'react'
import { LogoutOutlined,MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'

const { Header: HeaderContainer } = Layout

interface IProps {
  collapsed: boolean,
  setCollapsed: (v: boolean) => void
}


const items = [
  { key: '1', label: 'Выйти', icon: <LogoutOutlined /> }
]


const Header = ({ collapsed, setCollapsed }: IProps) => {
  const { token: { colorBgContainer } } = theme.useToken()

  return (
    <HeaderContainer
        style={{
          padding: 0,
          background: colorBgContainer,
          position: 'sticky',
          marginLeft: collapsed ? 80 : 200,
          top: 0,
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'margin-left 0.2s ease-out',
          boxShadow: '0 7px 7px 0 rgba(33,33,33,0.1)'
        }}>
      <Button
          type='text'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      <Menu
          mode='horizontal'
          defaultSelectedKeys={['2']}
          items={items}
        />
    </HeaderContainer>
  )
}

export default Header

