import React from 'react'
import Profile from '$components/_layout/pages/Profile/components/Profile'
import Button from '$components/_shared/Button'
import TelegramIcon from '$components/_shared/icons/TelegramIcon'

import './FirstSection.scss'

const FirstSection = () => {
  return (
    <section className='first-section-1'>
      <div className='container'>
        <span className='first-section-1__decor first-section-1__decor_first' />
        <Profile/>
        <div className='first-section-1__content'>
          <span className='first-section-1__decor first-section-1__decor_second'/>
          <div className='first-section-1__offer'>
            <p style={{ textAlign: 'center' }}>
              {'You can ask any question in the chat with support'}
            </p>
            <Button
              icon={TelegramIcon}
              iconColor='#C0F'
              isGradient
            >
              <a href='https://t.me/EasyDrop_Admin'>
                {'Chat with support'}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
