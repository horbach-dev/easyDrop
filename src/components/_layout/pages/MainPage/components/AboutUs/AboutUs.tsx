import React from 'react'
import Title from '$components/_shared/Title'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'

import './AboutUs.scss'

const AboutUs = () => {
  const [{ title, desc }] = useStore(ContentStore, store => ({
    title: store?.about_us?.title || '',
    desc: store?.about_us?.desc || '',
  }))

  return (
    <section className='about-us'>
      <div className='container'>
        <div className='about-us__content'>
          <div className='about-us__image' />
          <div className='about-us__text'>
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

export default AboutUs
