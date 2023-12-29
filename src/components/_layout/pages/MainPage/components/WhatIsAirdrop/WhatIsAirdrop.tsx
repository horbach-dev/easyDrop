import React from 'react'
import DecorImage from '$components/_layout/pages/MainPage/iPhone.png'
import Title from '$components/_shared/Title'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'

import './WhatIsAirdrop.scss'

const WhatIsAirdrop = () => {
  const [{ title, label, desc }] = useStore(ContentStore, store => ({
    title: store?.what_is_airdrop?.title || '',
    label: store?.what_is_airdrop?.label || '',
    desc: store?.what_is_airdrop?.desc || '',
  }))

  return (
    <section className='what-is-airdrop'>
      <div className='container'>
        <div className='what-is-airdrop__content'>
          <div className='what-is-airdrop__left'>
            <div className='what-is-airdrop__left-image'>
              <img
                src={DecorImage}
                alt='tutorial'
              />
            </div>
          </div>
          <div className='what-is-airdrop__right'>
            <p className='main-page__tag'>
              {label}
            </p>
            <Title>
              {title}
            </Title>
            <p>
              {desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsAirdrop
