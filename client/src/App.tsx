import React, { lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import AppRouter from '$components/_layout/AppRouter'
import RouterService from '$services/RouterService'



import './styles/default.scss'
import useStore from '$hooks/useStore'
import UserStore from '$stores/UserStore'

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
