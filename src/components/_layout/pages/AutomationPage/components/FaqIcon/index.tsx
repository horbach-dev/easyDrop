import React from 'react'
import classnames from 'classnames'

import './FaqIcon.scss'

const FaqIcon = ({ isActive }: any) => {

  return (
    <svg
      className={classnames('faq-arrow', isActive && 'faq-arrow_active')}
      width='14'
      height='10'
      viewBox='0 0 14 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.66229 9.02879C7.86338 9.97327 6.40725 9.97326 5.60834 9.02878L1.1199 3.72254C0.0203426 2.42264 0.944304 0.430901 2.64688 0.430901L11.6238 0.430902C13.3263 0.430902 14.2503 2.42264 13.1507 3.72254L8.66229 9.02879Z'
        fill='rgb(251 126 35)'/>
    </svg>
  )
}

export default FaqIcon
