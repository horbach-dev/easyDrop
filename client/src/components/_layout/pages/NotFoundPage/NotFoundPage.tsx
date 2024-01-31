import React from 'react'
import Button from '$components/_shared/Button'

import './NotFound.scss'

const NotFoundPage = () => {
  return (
    <div className='page not-found-page'>
      <div className='not-found-page__content'>
        <h2>
          {'404'}
        </h2>
        <p>
          {'Страница не найдена'}
        </p>
        <Button
          isGradient
          to='/'
        >
          {'На главную'}
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage
