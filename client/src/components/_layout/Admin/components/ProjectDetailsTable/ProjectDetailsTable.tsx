import React, { useEffect, useState } from 'react'
import { Button, Pagination, Space, Table } from 'antd'
import ProjectApi from '$api/project'
import UpdateProjectDetainsDrawer from '../UpdateProjectDetainsDrawer'

interface DataType {
  logo: string,
  color: string,
  name: string,
  price: number,
  active: boolean,
  tokenNet: string,
  listing: string,
  stableCoin: string,
  collectNet: string,
  commission: number,
  vesting: string
}

const ProjectDetailsTable = () => {
  const [projectsDetailsData, setProjectsDetailsData] = useState<DataType[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [updateDrawerOpen, setUpdateDrawerOpen] = useState(false)

  const [updateProjectDetails, setUpdateProjectDetails] = useState<DataType>()

  const columns = [
    {
      title: 'Name',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: 'logo',
      dataIndex: 'logo',
      key: 'logo',
    },
    {
      title: 'color',
      dataIndex: 'color',
      key: 'color',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'active',
      dataIndex: 'active',
      key: 'active',
      render: (item) => {
        return item ? 'Active' : 'Not active'
      }
    },
    {
      title: 'tokenNet',
      dataIndex: 'tokenNet',
      key: 'tokenNet',
    },
    {
      title: 'listing',
      dataIndex: 'listing',
      key: 'listing',
    },
    {
      title: 'stableCoin',
      dataIndex: 'stableCoin',
      key: 'stableCoin',
    },
    {
      title: 'collectNet',
      dataIndex: 'collectNet',
      key: 'collectNet',
    },
    {
      title: 'commission',
      dataIndex: 'commission',
      key: 'commission',
    },
    {
      title: 'vesting',
      dataIndex: 'vesting',
      key: 'vesting',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (item) => {
        return (
          <Button
            onClick={() => {
              setUpdateProjectDetails({ ...item })
              setUpdateDrawerOpen(true)
            }}
          >
            {'update'}
          </Button>
        )
      },
    },
  ]

  useEffect(() => {
    ProjectApi.getProjectsDetails(page)
      .then(res => {
        console.log(res.data.data)
        setProjectsDetailsData(res.data.data)
        // setTotal(res.data.pages)
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    setLoading(true)

    ProjectApi.getProjectsDetails(page)
      .then(res => {
        setProjectsDetailsData(res.data.data)
        setTotal(res.data.pages)
      })
      .finally(() => setLoading(false))
  }, [page, updateDrawerOpen])

  return (
    <>
      <Table
        loading={loading}
        pagination={false}
        columns={columns}
        dataSource={projectsDetailsData}
      />
      <Space>
        {/*<Button*/}
        {/*  type='primary'*/}
        {/*  onClick={() => setUserDrawerOpen(true)}*/}
        {/*>*/}
        {/*  {'Create user'}*/}
        {/*</Button>*/}
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
      {/*<CreateUserDrawer*/}
      {/*  onClose={() => setUserDrawerOpen(false)}*/}
      {/*  open={userDrawerOpen}*/}
      {/*/>*/}
      <UpdateProjectDetainsDrawer
        onClose={() => setUpdateDrawerOpen(false)}
        projectDetails={updateProjectDetails}
        open={updateDrawerOpen}
      />
    </>
  )
}

export default ProjectDetailsTable
