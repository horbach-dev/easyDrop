import React from 'react'
import Title from '$components/_shared/Title'

import './ProjectValues.scss'

const ProjectValues = ({ capital, values, founds = [] }: any) => {
  return (
    <section className='project-values'>
      <div className='container'>
        <Title className='project-values__title'>
          {'What is important to know about the project'}
        </Title>
        <div className='project-values__amounts'>
          <div className='project-values__amounts-item'>
            <p className='project-values__amounts-item-label'>
              {'Capitalization'}
            </p>
            <p
              className='project-values__amounts-item-value'
              dangerouslySetInnerHTML={{
                __html: capital
              }}
            />
          </div>
          <div className='project-values__amounts-item'>
            <p className='project-values__amounts-item-label'>
              {'Volume of attracted investments'}
            </p>
            <p
              className='project-values__amounts-item-value'
              dangerouslySetInnerHTML={{
                __html: values
              }}
            />
          </div>
        </div>
        {founds.length && (
          <div className='project-values__founds'>
            <p className='project-values__founds-title'>
              {'Funds'}
            </p>
            <div className='project-values__founds-list'>
              {founds.map(found => {
                return (
                  <a
                    className='project-values__founds-item'
                    key={found.name}
                    href={found.link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={`/${found.logo}`}
                      alt={found.name}
                    />
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectValues
