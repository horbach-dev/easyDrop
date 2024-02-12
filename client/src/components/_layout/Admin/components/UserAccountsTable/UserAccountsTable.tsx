import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Pagination, Space, Table } from 'antd'
import AccountApi from '$api/account'
import ProjectApi from '$api/project'
import CreateAccountDrawer from '../CreateAccountDrawer'
import UpdateAccountDrawer from '../UpdateAccountDrawer'

interface IProp {
  userId: string,
  projectId: string
}

const UserAccountsTable = ({ userId, projectId }: IProp) => {
  const nav = useNavigate()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [accountsData, setAccountsData] = useState([])
  const [project, setProject] = useState({})
  const [accountCreateDrawerOpen, setAccountCreateDrawerOpen] = useState(false)
  const [accountUpdateDrawerOpen, setAccountUpdateDrawerOpen] = useState(false)
  const [updateAccount, setUpdateAccount] = useState({})

  const columns = [
    {
      title: 'Project',
      dataIndex: ['Project', 'name'],
      key: 'project',
    },
    {
      title: 'Wallet',
      dataIndex: 'wallet',
      key: 'wallet',
    },
    {
      title: 'Runs',
      dataIndex: 'runs',
      key: 'runs',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (item) => {
        return (
          <Button
            onClick={() => {
              setUpdateAccount({ ...item })
              setAccountUpdateDrawerOpen(true)
            }}
          >
            {'update'}
          </Button>
        )
      },
    },
  ]

  useEffect(() => {
    Promise.all([
      AccountApi.getAccounts(page, projectId)
        .then(res => setAccountsData(res.data.data)),
      ProjectApi.getUserProjectById(projectId)
        .then(res => setProject(res.data))
    ])
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    AccountApi.getAccounts(page, projectId)
      .then(res => setAccountsData(res.data.data))
      .finally(() => setLoading(false))
  }, [accountCreateDrawerOpen, accountUpdateDrawerOpen])

  return (
    <>
      <Button
        type='primary'
        onClick={() => nav(`/admin?tab=1&userId=${userId}`)}
      >
        {'Back to projects'}
      </Button>
      <Table
        loading={loading}
        pagination={false}
        columns={columns}
        dataSource={accountsData}
      />
      <Space>
        <Button
          type='primary'
          onClick={() => setAccountCreateDrawerOpen(true)}
        >
          {'Create account'}
        </Button>
        <Pagination
          disabled={loading}
          showSizeChanger={false}
          current={page + 1}
          total={total * 10}
          onChange={(page) => {
            setPage(page - 1)
          }}
        />
      </Space>
      <CreateAccountDrawer
        onClose={() => setAccountCreateDrawerOpen(false)}
        open={accountCreateDrawerOpen}
        project={project}
      />
      <UpdateAccountDrawer
        onClose={() => setAccountUpdateDrawerOpen(false)}
        account={updateAccount}
        open={accountUpdateDrawerOpen}
      />
    </>
  )
}

export default UserAccountsTable
