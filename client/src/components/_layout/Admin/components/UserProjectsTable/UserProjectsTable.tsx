import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, message, Pagination, Space, Table } from 'antd'
import ProjectApi from '$api/project'
import CreateProjectDrawer from '../CreateProjectDrawer'
import UpdateProjectDrawer from '../UpdateProjectDrawer'

interface IProps {
  userId: string
}

interface DataType {
  name: string,
  accountCount: string,
  progress: string,
}

const UserProjectsTable = ({ userId }: IProps) => {
  const [projectsData, setProjectsData] = useState<DataType[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [createUserProjectDrawerOpen, setCreateUserProjectDrawerOpen] = useState(false)
  const [updateUserProjectDrawerOpen, setUpdateUserProjectDrawerOpen] = useState(false)

  const [updateUserProject, setUpdateUserProject] = useState<DataType>()

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'id',
    },
    {
      title: 'Accounts count',
      dataIndex: 'accountCount',
      key: 'password',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
    },
    {
      title: 'Average investment',
      dataIndex: 'averageInvestment',
      key: 'averageInvestment',
    },
    {
      title: 'expected income',
      dataIndex: 'expectedIncome',
      key: 'expectedIncome',
    },
    {
      title: 'Accounts',
      dataIndex: '',
      key: '',
      render: (item) => {
        return (
          <NavLink
            to={`/admin?tab=1&userId=${item.userId}&projectId=${item.id}`}
          >
            {'accounts'}
          </NavLink>
        )
      },
    },
    {
      title: 'Action',
      dataIndex: '',
      key: '',
      render: (item) => {
        return (
          <Button
            onClick={() => {
              setUpdateUserProject({ ...item })
              setUpdateUserProjectDrawerOpen(true)
            }}
          >
            {'update'}
          </Button>
        )
      },
    },
  ]

  useEffect(() => {
    setLoading(true)

    ProjectApi.getUserProjects(userId, page)
      .then(res => {
        setProjectsData(res.data.data)
        console.log(res.data.data)
        setTotal(res.data.pages)
      })
      .catch(() => message.error('error'))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    setLoading(true)

    ProjectApi.getUserProjects(userId, page)
      .then(res => {
        setProjectsData(res.data.data)
        setTotal(res.data.pages)
      })
      .catch(() => message.error('error'))
      .finally(() => setLoading(false))
  }, [page, createUserProjectDrawerOpen, updateUserProjectDrawerOpen])

  return (
    <>
      <Table
        loading={loading}
        pagination={false}
        columns={columns}
        dataSource={projectsData}
      />
      <Space>
        <Button
          type='primary'
          onClick={() => setCreateUserProjectDrawerOpen(true)}
        >
          {'Create user project'}
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
      <CreateProjectDrawer
        open={createUserProjectDrawerOpen}
        onClose={() => setCreateUserProjectDrawerOpen(false)}
        userId={userId}
      />
      <UpdateProjectDrawer
        onClose={() => setUpdateUserProjectDrawerOpen(false)}
        open={updateUserProjectDrawerOpen}
        project={updateUserProject}
      />
    </>
  )
}

export default UserProjectsTable
