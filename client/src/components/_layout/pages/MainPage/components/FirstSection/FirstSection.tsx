import React from 'react'
import { PopupActions } from '$actions/PopupActions'
import Button from '$components/_shared/Button'
import DownloadIcon from '$components/_shared/icons/DownloadIcon'
import Label from '$components/_shared/Label'
import Title from '$components/_shared/Title'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'
import LocaleStore from '$stores/LocaleStore'

import './FirstSection.scss'
import { translate } from '$services/I18n'

const FirstSection = () => {
  const [{ image }] = useStore(ContentStore, store => ({
    image: store?.video?.image || '',
  }))

  const [locale] = useStore(LocaleStore, store => store.locale)

  console.log(locale)

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
              {/*{translate('main_page.header.telling')}*/}
              {'Do you want to know about the most profitable type of investment?'}
            </Title>
            <div className='first-section__offer-sub'>
              <p>
                {'in the crypt'}
              </p>
              <Label value='from 10x to 1 000x' />
            </div>
            <Button
              icon={DownloadIcon}
              iconColor='#C0F'
              isGradient
              onClick={handleClick}
            >
              {'Download instructions'}
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
