/* eslint-disable react/jsx-max-props-per-line */

import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '$components/_layout/AppLayout'
import AutomationPage from '$components/_layout/pages/AutomationPage'
import MainPage from '$components/_layout/pages/MainPage'
import ActualProjects from '$components/_layout/pages/MainPage/components/ActualProjects'
import NotFoundPage from '$components/_layout/pages/NotFoundPage'
import ProjectPage from '$components/_layout/pages/ProjectPage'
import useInitApp from '$hooks/useInitApp'
import useStore from '$hooks/useStore'
import LocaleStore from '$stores/LocaleStore'
import UserStore from '$stores/UserStore'
import ProfilePage from '$components/_layout/pages/Profile'

const AdminRouter = lazy(() => import('$components/_layout/AdminRouter'))

const AppRouter = () => {
  const isInitialized = useInitApp()

  const [locale] = useStore(LocaleStore, store => store.locale)
  const [isAdmin] = useStore(UserStore, s => s.isAdmin)
  const [username] = useStore(UserStore, s => s.username)

  // заменить глобальным прелоадером
  if (!isInitialized) return null

  return (
    <Routes>
      {true && <Route path='admin' element={<AdminRouter/>} />}
      <Route element={<AppLayout />}>
        {username && <Route path='profile' element={<ProfilePage/>} />}
        <Route index element={<MainPage />} />
        <Route path='projects'>
          <Route index element={<ActualProjects />} />
          <Route path=':id' element={<ProjectPage />} />
        </Route>
        <Route path='automation' element={<AutomationPage />} />
        <Route path='404' element={<NotFoundPage />} />
        <Route path=':rest/*' element={<Navigate to={`/${locale}/404`} />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
