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
          {'Status'}
        </div>
        <div className='col col-active'>
          <input
            type='checkbox'
            checked={!!project.active}
          />
          {project.active ? 'Active' : 'Not active'}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Token price'}
        </div>
        <div className='col'>
          {project.price}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Token NET'}
        </div>
        <div className='col'>
          {project.tokenNet}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Listing'}
        </div>
        <div className='col'>
          {project.listing}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Stablecoin'}
        </div>
        <div className='col'>
          {project.stableCoin}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Collection NET'}
        </div>
        <div className='col'>
          {project.collectNet}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Commission'}
        </div>
        <div className='col'>
          {project.commission}
        </div>
      </div>
      <div className='row'>
        <div className='col col-label'>
          {'Vesting'}
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
