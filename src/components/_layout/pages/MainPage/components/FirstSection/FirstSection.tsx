import React from 'react'
import { PopupActions } from '$actions/PopupActions'
import Button from '$components/_shared/Button'
import DownloadIcon from '$components/_shared/icons/DownloadIcon'
import Label from '$components/_shared/Label'
import Title from '$components/_shared/Title'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'

import './FirstSection.scss'

const FirstSection = () => {
  const [{ image, title, btn }] = useStore(ContentStore, store => ({
    image: store?.video?.image || '',
    title: store?.main_section?.title || '',
    btn: store?.main_section?.btn || '',
  }))

  const handleClick = () => {
    PopupActions.showPopup('DownloadGuide')
  }

  return (
    <section className='first-section'>
      <div className='container'>
        <span className='first-section__decor first-section__decor_first' />
        <div className='first-section__content'>
          <div className='first-section__offer'>
            <Title>
              {title}
            </Title>
            <div className='first-section__offer-sub'>
              <p>
                {'в крипте'}
              </p>
              <Label value='от 10x до 1 000x' />
            </div>
            <Button
              icon={DownloadIcon}
              iconColor='#C0F'
              isGradient
              onClick={handleClick}
            >
              {btn}
            </Button>
          </div>
          <div className='first-section__popup'>
            <span className='first-section__decor first-section__decor_second' />
            {image && (
              <img
                src={`/${image}`}
                alt='tutorial'
              />
            )}
            <button
              className='button-play'
              onClick={() => PopupActions.showPopup('Video')}
            >
              <span />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection
