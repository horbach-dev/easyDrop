import React from 'react'
import YouTube from 'react-youtube'
import useStore from '$hooks/useStore'
import ContentStore from '$stores/ContentStore'

import './Video.scss'

const Video = () => {
  const [{ video }] = useStore(ContentStore, store => ({
    video: store.video || {}
  }))

  const _onReady = (event) => {
    event?.target.playVideo()
  }

  const opts = {
    height: '100%',
    width: '100%',
  }

  return (
    <div className='video-popup'>
      <YouTube
        videoId={video?.id}
        opts={opts}
        onReady={_onReady}
      />
    </div>
  )
}

export default Video
