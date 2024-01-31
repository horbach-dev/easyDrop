import React, { Suspense, useEffect,useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '$components/_shared/Footer'
import Header from '$components/_shared/Header'
import Logo from '$components/_shared/Logo'
import Popups from '$components/_shared/Popups'

const AppLayout = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
      <Popups />
      {isLoading && (
        <div className='preloader'>
          <Logo />
        </div>
      )}
    </>
  )
}

export default AppLayout
