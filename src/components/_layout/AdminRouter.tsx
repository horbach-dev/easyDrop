/* eslint-disable react/jsx-max-props-per-line */

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FrontendEdit from '$components/_layout/Admin/pages/FrontendEdit'
import MainPage from '$components/_layout/Admin/pages/Main'
import AdminLayout from '$components/_layout/AdminLayout'

const AdminRouter = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<MainPage />} />
        <Route path='frontend' element={<FrontendEdit />} />
      </Route>
    </Routes>
  )
}

export default AdminRouter
