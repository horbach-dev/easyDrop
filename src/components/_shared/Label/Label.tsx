import React from 'react'
import classnames from 'classnames'

import './Label.scss'

interface IProps {
  value: string
  className?: string
  isGradient?: boolean
}

const Label = ({ value, isGradient, className }: IProps) => {
  return (
    <div className={classnames('accent-label', isGradient && 'accent-label_gradient', className)}>
      <p className='accent-label__text'>
        {value}
      </p>
    </div>
  )
}

export default Label
