import React from 'react'
import AutomationImage from '$components/_layout/pages/ProjectPage/images/automation.png'
import Title from '$components/_shared/Title'
import Button from '$components/_shared/Button'

import './ProjectAutomationSection.scss'
import ArrowIcon from '$components/_shared/icons/ArrowIcon'
import { PopupActions } from '$actions/PopupActions'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'

const ProjectAutomationSection = ({ isAutomation }: any) => {
  const [{ title, desc, desc2, btnText }] = useStore(ContentStore, store => ({
    title: store.automation_section.title || '',
    desc: store.automation_section.desc || '',
    desc2: store.automation_section.desc2 || '',
    btnText: store.automation_section.btn || '',
  }))

  const buttonParams = isAutomation ? {
    onClick: () => PopupActions.showPopup('DownloadGuide')
  } : {
    to: 'automation'
  }

  return (
    <section className='project-automation'>
      <div className='container'>
        <div className='project-automation__content'>
          <div className='project-automation__image'>
            <span className='project-automation__decor' />
            <img
              src={AutomationImage}
              alt='Automation'
            />
          </div>
          <div className='project-automation__offer'>
            <Title>
              {title}
            </Title>
            <p>
              {desc}
            </p>
            <div className='project-automation__actions'>
              <p>
                {desc2}
              </p>
              <Button
                isGradient
                icon={ArrowIcon}
                iconColor='#C0F'
                {...buttonParams}
              >
                {btnText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectAutomationSection
