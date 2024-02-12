import React from 'react'

interface IProps {
  color?: string
}

/* eslint-disable max-len */
const WatchIcon = ({ color = '#CC00FF' }: IProps) => {
  return (
    <svg
      width='20'
      height='17'
      viewBox='0 -3 20 20'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M7.74902 8.34998C7.74902 7.10734 8.75638 6.09998 9.99902 6.09998C11.2417 6.09998 12.249 7.10734 12.249 8.34998C12.249 9.59262 11.2417 10.6 9.99902 10.6C8.75638 10.6 7.74902 9.59262 7.74902 8.34998Z'
        fill='url(#paint0_linear_1367_1089)'/>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M-0.000976562 8.34998C-0.000976562 9.98935 0.423988 10.5414 1.27392 11.6456C2.97099 13.8504 5.81714 16.35 9.99902 16.35C14.1809 16.35 17.0271 13.8504 18.7241 11.6456C19.5741 10.5414 19.999 9.98935 19.999 8.34998C19.999 6.7106 19.5741 6.1585 18.7241 5.05431C17.0271 2.84953 14.1809 0.349976 9.99902 0.349976C5.81714 0.349976 2.97099 2.84953 1.27392 5.05431C0.423988 6.1585 -0.000976562 6.7106 -0.000976562 8.34998ZM9.99902 4.59998C7.92796 4.59998 6.24902 6.27891 6.24902 8.34998C6.24902 10.421 7.92796 12.1 9.99902 12.1C12.0701 12.1 13.749 10.421 13.749 8.34998C13.749 6.27891 12.0701 4.59998 9.99902 4.59998Z'
        fill='url(#paint1_linear_1367_1089)'/>
      <defs>
        <linearGradient
          id='paint0_linear_1367_1089'
          x1='-1.87153'
          y1='-17.9989'
          x2='27.4132'
          y2='-16.4921'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#F2A93C'/>
          <stop
            offset='1'
            stopColor='#FF6B00'/>
        </linearGradient>
        <linearGradient
          id='paint1_linear_1367_1089'
          x1='-1.87153'
          y1='-17.9989'
          x2='27.4132'
          y2='-16.4921'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#F2A93C'/>
          <stop
            offset='1'
            stopColor='#FF6B00'/>
        </linearGradient>
      </defs>
    </svg>
  )
}
/* eslint-enable max-len */

export default WatchIcon
