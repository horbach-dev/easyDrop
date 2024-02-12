import React from 'react'
import Assets from '$components/_layout/pages/Profile/components/Assets'
import FirstSection from '$components/_layout/pages/Profile/components/FirstSection'
import Wallets from '$components/_layout/pages/Profile/components/Wallets'

const ProfilePage = () => {
  return (
    <div>
      <FirstSection/>
      <Assets/>
      <Wallets/>
    </div>
  )
}

export default ProfilePage
