/* eslint-disable react/jsx-max-props-per-line */

import React, { lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppRouter from '$components/_layout/AppRouter'
import RouterService from '$services/RouterService'

const AdminRouter = lazy(() => import('$components/_layout/AdminRouter'))

import useStore from '$hooks/useStore'
import UserStore from '$stores/UserStore'

import './styles/default.scss'

const App = () => {
  const [isAdmin] = useStore(UserStore, s => s.isAdmin)

  useEffect(() => {

  }, [])

  return (
    <Routes>
      <Route path='/:locale/*' element={<AppRouter />} />
      {isAdmin && <Route path='admin' element={<AdminRouter/>} />}
      <Route index element={<RouterService.LocaleRedirect isAdmin={isAdmin} />}/>
    </Routes>
  )
}

export default App
