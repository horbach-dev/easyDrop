import React from 'react'
import { Checkbox, Slider, Tooltip } from 'antd'

import './CalculatorItem.scss'

const CalculatorItem = ({ color, title, logo, tooltip, checked, handleCheckbox, handleChange, value = 0 }: any) => {
  const onChange = (newValue: number) => {
    handleChange(newValue > 100 ? 100 : newValue)
  }

  console.log('color', color)

  return (
    <div className='calculator-item'>
      <Checkbox
        name={title}
        className={`calculator-item__checkbox calculator-item__checkbox_${color}`}
        checked={checked}
        onChange={handleCheckbox}
      >
        <div className='calculator-item__label'>
          <span
            className='calculator-item__label-icon'
            style={{ backgroundImage: `url("/${logo}")` }}
          />
          <span className='calculator-item__label-text'>
            {title}
          </span>
        </div>
      </Checkbox>

      <div className='calculator-item__input-side'>
        <Tooltip
          placement='top'
          className='calculator-item__input-tool'
          title={tooltip}
        >
          <span className='calculator-item__input-tool-lab'>
            {'?'}
          </span>
        </Tooltip>
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
            disabled={!checked}
            className='calculator-item__input-slider'
            min={checked ? 1 : 0}
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
