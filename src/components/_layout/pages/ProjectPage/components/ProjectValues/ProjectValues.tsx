import React from 'react'
import Title from '$components/_shared/Title'

import './ProjectValues.scss'

const ProjectValues = ({ capital, values, founds = [] }: any) => {
  return (
    <section className='project-values'>
      <div className='container'>
        <Title className='project-values__title'>
          {'Что важно знать о проекте'}
        </Title>
        <div className='project-values__amounts'>
          <div className='project-values__amounts-item'>
            <p className='project-values__amounts-item-label'>
              {'Капитализация'}
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
              {'Объем привлеченный инвестици'}
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
              {'Фонды'}
            </p>
            <div className='project-values__founds-list'>
              {founds.map(found => {
                return (
                  <a
                    className='project-values__founds-item'
                    key={found.name}
                    href={found.link}
                    target='_blank'
rel='noreferrer'>
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
