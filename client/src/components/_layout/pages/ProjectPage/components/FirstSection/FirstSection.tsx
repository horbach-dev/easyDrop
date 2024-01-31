import React from 'react'
import { PopupActions } from '$actions/PopupActions'
import ActualProjectItem from '$components/_shared/ActualProjectItem'
import Button from '$components/_shared/Button'
import AutomationIcon from '$components/_shared/icons/AutomationIcon'
import DownloadIcon from '$components/_shared/icons/DownloadIcon'
import Title from '$components/_shared/Title'

import './FirstSection.scss'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'

const FirstSection = (props: any) => {
  const [{ title, btn1, btn2 }] = useStore(ContentStore, store => ({
    title: store?.project_page?.first?.title || '',
    btn1: store?.project_page?.first?.btn1 || '',
    btn2: store?.project_page?.first?.btn2 || '',
  }))

  return (
    <section className='project-first-section'>
      <div className='container'>
        <span className='project-first-section__decor project-first-section__decor_first' />
        <div className='project-first-section__content'>
          <div className='project-first-section__content-offer'>
            <Title className='project-first-section__title'>
              {title}
            </Title>
            <div className='project-first-section__actions'>
              <Button
                onClick={() => PopupActions.showPopup('DownloadGuide')}
                icon={DownloadIcon}
              >
                {btn1}
              </Button>
              <Button
                to='automation'
                icon={AutomationIcon}
                isGradient
                iconColor='#C0F'
              >
                {btn2}
              </Button>
            </div>
          </div>
          <ActualProjectItem {...props} />
        </div>
      </div>
    </section>
  )
}

export default FirstSection
