import React from 'react'
import { Collapse } from 'antd'
import FaqIcon from '$components/_layout/pages/AutomationPage/components/FaqIcon'
import ProjectAutomationSection from '$components/_shared/ProjectAutomationSection'
import Title from '$components/_shared/Title'
import useStore from '$hooks/useStore'
import { translate } from '$services/I18n'
import ContentStore from '$stores/ContentStore'
import Calculator from './components/Calculator'
import FirstSectionImage from './images/first-section.png'

import './AutomationPage.scss'

const AutomationPage = () => {
  const [{ faq, strategy }] = useStore(ContentStore, store => ({
    faq: store.faq || [],
    strategy: store.strategy || []
  }))

  const items = faq.map((item, key) => {
    return {
      key: key + 1,
      label: item.title,
      headerClass: 'automation-page__faq-item-header',
      className: 'automation-page__faq-item',
      children:
        (<p>
          {item.desc}
        </p>),
    }
  })

  return (
    <div className='automation-page'>
      <section className='automation-page__main'>
        <div className='container'>
          <div className='automation-page__main-content'>
            <div className='automation-page__main-content-offer'>
              <span className='automation-page__decor automation-page__decor_first' />
              <Title className='automation-page__main-title'>
                {translate('automation_page.first.title')}
              </Title>
              <p>
                {translate('automation_page.first.desc')}
              </p>
              <span className='automation-page__main-content-border' />
            </div>
            <div className='automation-page__main-image'>
              <img
                src={FirstSectionImage}
                alt='Automation'
              />
            </div>
          </div>
        </div>
      </section>

      <Calculator />

      <section className='automation-page__descriptions'>
        <div className='container'>
          <div className='automation-page__descriptions-content'>
            <Title>
              {translate('automation_page.third.title')}
            </Title>
            <p>
              {translate('automation_page.third.desc')}
            </p>
          </div>
        </div>
      </section>

      <div className='container'>
        <div className='automation-page__divider' />
      </div>

      <section className='automation-page__descriptions'>
        <span className='automation-page__descriptions-decor' />
        <div className='container'>
          <div className='automation-page__descriptions-content'>
            <Title>
              {translate('automation_page.fourth.title')}
            </Title>
            <p>
              {translate('automation_page.fourth.desc')}
            </p>
          </div>
        </div>
      </section>

      <div className='container'>
        <div className='automation-page__divider' />
      </div>

      <section className='automation-page__strategy'>
        <div className='container'>
          <Title>
            {'Work strategy'}
          </Title>
          {strategy.map((item, index) => {
            return (
              <div
                key={index}
                className='automation-page__strategy-item'
              >
                <span className='automation-page__strategy-item-num'>
                  {index + 1}
                </span>
                <p className='automation-page__strategy-item-text'>
                  {item}
                </p>
              </div>
            )
          })}
        </div>
        <span className='automation-page__strategy-decor' />
      </section>

      <ProjectAutomationSection isAutomation />

      <section className='automation-page__faq'>
        <div className='container'>
          <Title>
            {'FAQ'}
          </Title>
          <Collapse
            expandIcon={FaqIcon}
            ghost
            items={items}
          />
        </div>
      </section>
    </div>
  )
}

export default AutomationPage
