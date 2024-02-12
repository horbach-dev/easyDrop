import React, { useEffect, useState } from 'react'
import { Collapse, message } from 'antd'
import AccountApi from '$api/account'
import FaqIcon from '$components/_layout/pages/AutomationPage/components/FaqIcon'
import CopyIcon from '$components/_shared/icons/CopyIcon'
import WatchIcon from '$components/_shared/icons/WatchIcon'
import Title from '$components/_shared/Title'

import './Wallets.scss'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'

const faq = [
  {
    title: 'ARBITRUM',
    desc: 'qwe',
    accounts: [
      {
        wallet: 'kuweriwuejksdsk8239iuh23jl1k13fwef',
        runs: '3'
      },
      {
        wallet: 'kuweriwuejksdsk8239iuh23jl1k13fwef',
        runs: '5'
      }
    ]
  },
]

const CollapseItem = (wallet: string, runs: any, index: number, site: string, id: string) => {

  return (
    <div
      className='wallets__item-content'
      key={id}
    >
      <div
        className='wallets__item-content-item'
        style={{ minWidth: 0 }}/>
      <div className='wallets__item-content-item'>
        {
          !index && (
            <div className='wallets__item-content-title'>
              {'Wallets'}
            </div>
        )}
        {wallet + ' '}
        <span
          style={{
            cursor: 'pointer'
          }}
          onClick={() => {
            navigator.clipboard.writeText(wallet)
              .then(() => message.success('copy to clipboard'))
          }}
        >
          <CopyIcon/>
        </span>
      </div>
      <div className='wallets__item-content-item'>
        {
          !index && (
            <div className='wallets__item-content-title'>
              {'Runs'}
            </div>
        )}
        {runs}
      </div>
      <div className='wallets__item-content-item'>
        {
          !index && (
            <div className='wallets__item-content-title'>
              {'Status'}
            </div>
        )}
        <a href={`${site}${wallet}`}>
          <p
            style={{
              zIndex: 1000000,
              color: '#f78f23'
            }}
          >
            <WatchIcon key={id}/>
            {' CHECK'}
          </p>
        </a>
      </div>
    </div>
  )
}

const Wallets = () => {
  const [projects] = useStore(ContentStore, store => store.projects || [])
  const [wallets, setWallets] = useState([])

  useEffect(() => {
    AccountApi.getUserAccounts()
      .then((res) => {
        const data = res.data.filter(item => item.Accounts.length)

        const items = data.map((project, key) => {
          return {
            key: key + 1,
            label: project.name,
            headerClass: 'wallets__item-header',
            className: 'wallets__item',
            children: project.Accounts.map((item, index) =>
              CollapseItem(
                item.wallet,
                item.runs,
                index,
                projects.find((staticProject) => staticProject.title === project.name).site,
                item.id
              )
            ),
          }
        })

        setWallets(items)
      })

  }, [])


  return (
    <section className='wallets'>
      <div className='container'>
        <Title>
          {'My wallets'}
        </Title>
        <Collapse
          expandIcon={FaqIcon}
          ghost
          items={wallets}
        />
      </div>
    </section>
  )
}

export default Wallets
