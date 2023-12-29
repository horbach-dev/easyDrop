import React, { Suspense } from 'react'
import { Spin } from 'antd'
import classnames from 'classnames'
import useStore from '$hooks/useStore'
import * as popups from '$services/popups'
import PopupStore from '$stores/PopupStore'

import './Popups.scss'
import CloseIcon from '$components/_shared/icons/CloseIcon'
import { PopupActions } from '$actions/PopupActions'

const Popups = () => {
  const [active] = useStore(PopupStore, store => store.active)

  const Popup = active && popups?.[active]

  return (
    <div className={classnames('popups', active && 'popups_show', `popups_${active}`)}>
      <div className='popups__container'>
        <div className='popups__content'>
          <button
            className='popups__close'
            onClick={PopupActions.hidePopup}
          >
            <CloseIcon />
          </button>
          <Suspense fallback={<Spin size='large' className='popups__loading' />}>
            {Popup && <Popup />}
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Popups
