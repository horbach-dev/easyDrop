import React from 'react'
import ActualProjectItem from '$components/_shared/ActualProjectItem'
import Title from '$components/_shared/Title'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'

import './ActualProjects.scss'

const ActualProjects = () => {
  const [projects] = useStore(ContentStore, store => store.projects)

  if (!projects || !projects.length) return null

  return (
    <section className='actual-projects'>
      <div className='container'>
        <span className='actual-projects__decor actual-projects__decor_first' />
        <span className='actual-projects__decor actual-projects__decor_second' />
        <Title className='actual-projects__title'>
          {'Актуальные проекты для инвестиций'}
        </Title>
        <div className='actual-projects__list'>
          {projects.map(item => {
        return (
          <ActualProjectItem
            key={item.id}
            id={item.id}
            logo={item.logo}
            title={item.title}
            desc={item.desc}
            expectedProfit={item.expectedProfit}
            expenses={item.expenses}
            date={item.date}
          />
        )
      })}
        </div>
      </div>
    </section>
  )
}

export default ActualProjects
