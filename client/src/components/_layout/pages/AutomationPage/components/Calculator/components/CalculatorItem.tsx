import React from 'react'
import { Slider } from 'antd'

import './CalculatorItem.scss'

const CalculatorItem = ({ title, logo,checked, handleChange, value = 0 }: any) => {
  const onChange = (newValue: number) => {
    handleChange(newValue > 100 ? 100 : newValue)
  }

  return (
    <div className='calculator-item'>
      <div className='calculator-item__label'>
        <span
            className='calculator-item__label-icon'
            style={{ backgroundImage: `url("/${logo}")` }}
          />
        <span className='calculator-item__label-text'>
          {title}
        </span>
      </div>

      <div className='calculator-item__input-side'>
        <div className='calculator-item__input'>
          <div className='calculator-item__input-wrap'>
            <span>
              {'Accounts:'}
            </span>
            <input
              disabled={!checked}
              className='calculator-item__input-field'
              value={value}
              onChange={({ target }) => onChange(Number(target.value || 0))}
              type='number'
              max={100}
            />
          </div>
          <Slider
            className='calculator-item__input-slider'
            min={0}
            max={100}
            onChange={onChange}
            value={typeof value === 'number' ? value : 0}
          />
        </div>
      </div>
    </div>
  )
}

export default CalculatorItem
