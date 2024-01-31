import React from 'react'
import { PopupActions } from '$actions/PopupActions'
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

const header = {
  title: 'Project name',
  date: 'Year of release',
  invest: 'Average profit',
  profit: 'Average profitability',
  sum: 'Total income',
  link: 'More about the project'
}

const data = [
  {
    title: 'Arbitrum',
    data: '2023',
    invest: '$25',
    profit: '$1500',
    sum: '60x',
    link: 'https://cryptorank.io/price/arbitrum'
  },
  {
    title: 'Uniswap',
    data: '2020',
    invest: '$20',
    profit: '$2000',
    sum: '100x',
    link: 'https://cryptorank.io/price/uniswap'
  },
  {
    title: 'Aptos',
    data: '2022',
    invest: '$10',
    profit: '$2400',
    sum: '240x',
    link: 'https://cryptorank.io/price/aptos'
  },
  {
    title: 'Optimism',
    data: '2022',
    invest: '$40',
    profit: '$1600',
    sum: '40x',
    link: 'https://cryptorank.io/price/optimism'
  }
]


const MainPage = () => {
  return (
    <div className='main-page'>
      <FirstSection />
      <WhatIsAirdrop />

      <section className='main-page__third-section'>
        <div className='container'>
          <p className='main-page__tag'>
            {'HISTORICALLY'}
          </p>
          <Title>
            {'The most profitable type of investment is mining tokens before listing'}
          </Title>
          <Table
            data={data}
            header={header}
          />
        </div>
      </section>

      <ActualProjects />

      <section className='main-page__fiveth-section'>
        <div className='container'>
          <Title>
            {'Real cases of participants of past drops'}
          </Title>
          <AirdropCases />
        </div>
      </section>

      <AboutUs />

      <section className='main-page__seventh-section'>
        <div className='main-page__seventh-section-decor' />
        <div className='container'>
          <Title center>
            {'Start participating in AirDrop'}
          </Title>
          <div className='get-started'>
            <div className='get-started__actions'>
              <Button
                onClick={() => PopupActions.showPopup('DownloadGuide')}
                icon={DownloadIcon}
              >
                {'Download instructions'}
              </Button>
              <Button
                to='automation'
                icon={AutomationIcon}
                isGradient
                iconColor='#C0F'
              >
                {'Trust automation'}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage
