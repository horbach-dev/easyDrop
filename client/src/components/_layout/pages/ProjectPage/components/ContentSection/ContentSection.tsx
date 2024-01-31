import React from 'react'
import Title from '$components/_shared/Title'

import './ContentSection.scss'

const ContentSection = ({ content }: any) => {
  return (
    <section className='project-content-section'>
      <div className='container'>
        {content.map(item => (
          <div
            key={item.title}
            className='project-content-section__content'
          >
            <Title className='project-content-section__title'>
              {item.title}
            </Title>
            {item.content.map(item => {
              return (
                <div
                  key={item.title}
                  className='project-content-section__content-item'
                >
                  <p className='project-content-section__content-title'>
                    {item.title}
                  </p>
                  <p className='project-content-section__content-desc'>
                    {item.desc}
                  </p>
                </div>
              )
            })}
            <span className='project-content-section__content-divider' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContentSection
