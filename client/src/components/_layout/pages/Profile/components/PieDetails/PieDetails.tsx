import React from 'react'
import { PopupActions } from '$actions/PopupActions'
import CloseIcon from '$components/_shared/icons/CloseIcon'

import './PieDetails.scss'

interface IProp {
  project: any
  open: boolean
  onClose: any
}

const PieDetails = ({ project, open, onClose }: IProp) => {
  console.log(project)

  if (!open) {
    return <></>
  }

  return (
    <div
      className='pie-details'
      // style={{ position: 'relative' }}
    >
      <span className='pie-details-decorate'/>
      <div>
        <div className='accounts-second-item__title'>
          <span
            className='accounts-second-item__label-icon'
            style={{
              backgroundImage: `url("/${project.logo}")`
            }}
          />
          {
            project.label
          }
        </div>
        <button
          className='popups__close'
          onClick={onClose}
        >
          <CloseIcon/>
        </button>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Статус'}
        </div>
        <div className='col col-active'>
          <input
            type='checkbox'
            checked={!!project.active}
          />
          {project.active ? 'Активен' : 'Не активен'}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Цена токена'}
        </div>
        <div className='col'>
          {project.price}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Сеть токена'}
        </div>
        <div className='col'>
          {project.tokenNet}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Листинг'}
        </div>
        <div className='col'>
          {project.listing}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Стейблкоин'}
        </div>
        <div className='col'>
          {project.stableCoin}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Сеть сбора'}
        </div>
        <div className='col'>
          {project.collectNet}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Комиссия'}
        </div>
        <div className='col'>
          {project.commission}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Вестинг'}
        </div>
        <div
          className='col col-label'
          style={{
            fontSize: '12px',
            paddingTop: '0',
            verticalAlign: '-webkit-baseline-middle'
          }}
        >
          <p>
            {project.vesting}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PieDetails
