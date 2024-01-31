/* eslint-disable react/jsx-max-props-per-line */

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FrontendEdit from '$components/_layout/Admin/pages/FrontendEdit'
import MainPage from '$components/_layout/Admin/pages/Main'
import AdminLayout from '$components/_layout/AdminLayout'
import useInitApp from '$hooks/useInitApp'
import useStore from '$hooks/useStore'
import LocaleStore from '$stores/LocaleStore'

const AdminRouter = () => {
  // const isInitialized = useInitApp()
  //
  // const [locale] = useStore(LocaleStore, store => store.locale)
  //
  // // заменить глобальным прелоадером
  // if (!isInitialized) return null

  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<MainPage />} />
        <Route path='/frontend' element={<FrontendEdit />} />
      </Route>
    </Routes>
  )
}

export default AdminRouter
