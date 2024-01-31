import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined'
import { Button, Input,Pagination, Space, Table, TableColumnType } from 'antd'
import AdminApi from '$api/admin'
import CreateUserDrawer from '../CreateUserDrawer'
import UpdateUserDrawer from '../UpdateUserDrawer'

interface IProps {

}

interface DataType {
  username: string,
  password: string,
  name: string,
  projects: string
}

type DataIndex = keyof DataType;

const UserTable = () => {
  const [userData, setUserData] = useState<DataType[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef<typeof Input>(null)
  const [userDrawerOpen, setUserDrawerOpen] = useState(false)
  const [updateUserDrawerOpen, setUpdateUserDrawerOpen] = useState(false)

  const [updateUser, setUpdateUser] = useState<DataType>()

  const handleSearch = (
    selectedKeys: string[],
    confirm: any,
    dataIndex: DataIndex,
  ) => {
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = (clearFilters: () => void) => {
    clearFilters()
    setSearchText('')
  }

  const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{ padding: 8 }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}
          >
            {'Search\r'}
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size='small'
            style={{ width: 90 }}
          >
            {'Reset\r'}
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              close()
            }}
          >
            {'close\r'}
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100)
      }
    }
  })

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'id',
      ...getColumnSearchProps('username')
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Metamask',
      dataIndex: 'metamask',
      key: 'metamask',
    },
    {
      title: 'Telegram',
      dataIndex: 'telegram',
      key: 'telegram',
    },
    {
      title: 'Projects',
      dataIndex: 'projects',
      key: 'projects',
      render: (_, item) => {
        console.log(item)

        return (
          <NavLink
            to={`/admin?tab=1&userId=${item?.id}`}
          >
            {'projects'}
          </NavLink>
        )
      }
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (item) => {
        return (
          <Button
            onClick={() => {
              setUpdateUser({ ...item })
              setUpdateUserDrawerOpen(true)
            }}
          >
            {'update'}
          </Button>
        )
      },
    },
  ]

  useEffect(() => {
    AdminApi.getUsers(page)
      .then(res => {
        console.log(res.data.data)
        setUserData(res.data.data)
        setTotal(res.data.pages)
      })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    setLoading(true)

    AdminApi.getUsers(page, searchText, searchedColumn)
      .then(res => {
        setUserData(res.data.data)
        setTotal(res.data.pages)
      })
      .finally(() => setLoading(false))
  }, [page, searchText, searchedColumn, userDrawerOpen, updateUserDrawerOpen])

  return (
    <>
      <Table
        loading={loading}
        pagination={false}
        columns={columns}
        dataSource={userData}
      />
      <Space>
        <Button
          type='primary'
          onClick={() => setUserDrawerOpen(true)}
        >
          {'Create user'}
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
      <CreateUserDrawer
        onClose={() => setUserDrawerOpen(false)}
        open={userDrawerOpen}
      />
      <UpdateUserDrawer
        onClose={() => setUpdateUserDrawerOpen(false)}
        user={updateUser}
        open={updateUserDrawerOpen}
      />
    </>
  )
}

export default UserTable
