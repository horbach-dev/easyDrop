import React, { useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import classnames from 'classnames'
import { PopupActions } from '$actions/PopupActions'
import Button from '$components/_shared/Button'
import AutomationIcon from '$components/_shared/icons/AutomationIcon'
import DownloadIcon from '$components/_shared/icons/DownloadIcon'
import ProjectAutomationSection from '$components/_shared/ProjectAutomationSection'
import Title from '$components/_shared/Title'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'
import LocaleStore from '$stores/LocaleStore'
import ContentSection from './components/ContentSection'
import FirstSection from './components/FirstSection'
import ProjectValues from './components/ProjectValues'

import './ProjectPage.scss'
import ArrowIcon from '$components/_shared/icons/ArrowIcon'

const ProjectPage = () => {
  const [isVideoPlay, setVideoPlay] = useState(false)
  const videoRef = useRef<any>(null)
  const { id } = useParams()

  const [locale] = useStore(LocaleStore, store => store.locale)

  const [{ items, video, videoTitle, videoDesc, videoBtn }] = useStore(ContentStore, store => ({
    items: store.projects || [],
    video: store.video || {},
    videoTitle: store.video?.section?.title || {},
    videoDesc: store.video?.section?.desc || {},
    videoBtn: store.video?.section?.btn || {},
  }))

  const handleVideoPlay = () => {
    videoRef?.current?.playVideo()
    setVideoPlay(true)
  }

  const _onReady = (event) => {
    videoRef.current = event?.target
  }

  const currentItem = items.find(item => item.id === id)

  if (!items.length || !currentItem) return <Navigate to={`/${locale}/404`} />

  const opts = {
    height: '100%',
    width: '100%',
  }

  return (
    <div className='project-page'>
      <FirstSection
        isPage
        {...currentItem}
      />
      <ProjectValues
        capital={currentItem.capital}
        values={currentItem.values}
        founds={currentItem.founds}
      />

      <ContentSection content={currentItem.content} />

      <section className='get-started'>
        <div className='container'>
          <span className='get-started__decor' />
          <Title center>
            {'Начать участие в проекте'}
          </Title>
          <div className='get-started__actions'>
            <Button
              icon={DownloadIcon}
              onClick={() => PopupActions.showPopup('DownloadGuide')}
            >
              {'Скачать инструкцию'}
            </Button>
            <Button
              to='automation'
              icon={AutomationIcon}
              isGradient
              iconColor='#C0F'
            >
              {'Доверить автоматизации'}
            </Button>
          </div>
          <span className='get-started__border' />
        </div>
      </section>

      <section className='video-instruction'>
        <div className='container'>
          <Title center>
            {videoTitle}
          </Title>
          <div className='video-instruction__video'>
            <div className='video-instruction__image'>
              <span className='video-instruction__decor video-instruction__decor_top' />
              <span className='video-instruction__decor video-instruction__decor_bottom' />
              <span className='video-instruction__decor video-instruction__decor_right' />
              <span className='video-instruction__decor video-instruction__decor_left' />
              <YouTube
                videoId={video?.id}
                opts={opts}
                onEnd={() => setVideoPlay(false)}
                onReady={_onReady}
              />
              <div
                className={
                  classnames(
                    'video-instruction__overlay',
                    isVideoPlay && 'video-instruction__overlay_hide',
                )}
              >
                <button
                  onClick={handleVideoPlay}
                  className='button-play'
                >
                  <span />
                </button>
                {video?.image && (
                  <img
                    src={`/${video?.image}`}
                    alt='Video'
                  />
                )}
              </div>
            </div>
            <div className='video-instruction__content'>
              <p>
                {videoDesc}
              </p>
              <Button
                isGradient
                to='automation'
                icon={ArrowIcon}
                iconColor='#C0F'
              >
                {videoBtn}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ProjectAutomationSection />
    </div>
  )
}

export default ProjectPage
