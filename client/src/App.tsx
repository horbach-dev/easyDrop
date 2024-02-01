import React, { lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppRouter from '$components/_layout/AppRouter'
import useStore from '$hooks/useStore'
import RouterService from '$services/RouterService'
import UserStore from '$stores/UserStore'

import './styles/default.scss'

const App = () => {
  const [isAdmin] = useStore(UserStore, s => s.isAdmin)

  useEffect(() => {

  }, [])

  return (
    <Routes>
      <Route path='/:locale/*' element={<AppRouter />} />
      <Route index element={<RouterService.LocaleRedirect isAdmin={isAdmin} />}/>
    </Routes>
  )
}

export default App
