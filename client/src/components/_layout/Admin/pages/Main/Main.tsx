import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import UserProjectsTable from '../../components/UserProjectsTable'
import UserTable from '../../components/UserTable'
import ProjectDetailsTable from '../../components/ProjectDetailsTable'


const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const nav = useNavigate()

  useEffect(() => {
    if (!searchParams.size) {
      nav('?tab=1')
    }
  }, [])

  if (searchParams.get('tab') === '1' && searchParams.get('userId')) {
    return (
      <UserProjectsTable userId={searchParams.get('userId')}/>
    )
  }

  if (searchParams.get('tab') === '1') {
    return (
      <UserTable/>
    )
  }

  if (searchParams.get('tab') === '2') {
    return (
      <ProjectDetailsTable/>
    )
  }

  return (
    <div>

    </div>
  )
}

export default Main
