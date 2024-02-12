import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ProjectDetailsTable from '../../components/ProjectDetailsTable'
import UserProjectsTable from '../../components/UserProjectsTable'
import UserTable from '../../components/UserTable'
import UserAccountsTable from '../../components/UserAccountsTable'


const Main = () => {
  const [searchParams] = useSearchParams()
  const nav = useNavigate()

  useEffect(() => {
    if (!searchParams.size) {
      nav('?tab=1')
    }
  }, [])

  if (searchParams.get('tab') === '1' && searchParams.get('userId') && searchParams.get('projectId')) {
    return (
      <UserAccountsTable
        userId={searchParams.get('userId')}
        projectId={searchParams.get('projectId')}
      />
    )
  }

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
