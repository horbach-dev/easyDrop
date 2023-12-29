import React from 'react'
import Button from '$components/_shared/Button'
import AutomationIcon from '$components/_shared/icons/AutomationIcon'
import DownloadIcon from '$components/_shared/icons/DownloadIcon'
import Table from '$components/_shared/Table'
import Title from '$components/_shared/Title'
import AboutUs from './components/AboutUs'
import ActualProjects from './components/ActualProjects'
import AirdropCases from './components/AirdropCases'
import FirstSection from './components/FirstSection'
import WhatIsAirdrop from './components/WhatIsAirdrop'

import './MainPage.scss'
import { PopupActions } from '$actions/PopupActions'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'

const MainPage = () => {
  const [{ label, title, airdrop_cases_title }] = useStore(ContentStore, store => ({
    label: store?.table?.label || '',
    title: store?.table?.title || '',
    airdrop_cases_title: store?.airdrop_cases_title || '',
  }))

  return (
    <div className='main-page'>
      <FirstSection />
      <WhatIsAirdrop />

      <section className='main-page__third-section'>
        <div className='container'>
          <p className='main-page__tag'>
            {label}
          </p>
          <Title>
            {title}
          </Title>
          <Table />
        </div>
      </section>

      <ActualProjects />

      <section className='main-page__fiveth-section'>
        <div className='container'>
          <Title>
            {airdrop_cases_title}
          </Title>
          <AirdropCases />
        </div>
      </section>

      <AboutUs />

      <section className='main-page__seventh-section'>
        <div className='main-page__seventh-section-decor' />
        <div className='container'>
          <Title center>
            {'Начни участие в AirDrop'}
          </Title>
          <div className='get-started'>
            <div className='get-started__actions'>
              <Button
                onClick={() => PopupActions.showPopup('DownloadGuide')}
                icon={DownloadIcon}
              >
                {'Скачать инструкцию'}
              </Button>
              <Button
                to='automation'
                icon={AutomationIcon}
                isGradient
                iconColor='#C0F'
              >
                {'Доверить автоматизации'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage
