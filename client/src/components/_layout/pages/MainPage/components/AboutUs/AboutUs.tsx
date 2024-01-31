import React from 'react'
import Title from '$components/_shared/Title'

import './AboutUs.scss'

const AboutUs = () => {
  return (
    <section className='about-us'>
      <div className='container'>
        <div className='about-us__content'>
          <div className='about-us__image' />
          <div className='about-us__text'>
            <Title>
              {'About us'}
            </Title>
            <p>
              {/* eslint-disable-next-line max-len */}
              {'We are a team of crypto enthusiasts with extensive experience investing in the cryptocurrency market. We have an experienced team and our own IT solutions that allow us to consistently receive profits from the market'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
