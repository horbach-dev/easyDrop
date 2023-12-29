import React from 'react'

interface IProps {
  color?: string
}

/* eslint-disable max-len */
const ArrowIcon = ({ color = '#CC00FF' }: IProps) => {
  return (
    <svg
      width='26'
      height='15'
      viewBox='0 0 26 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M25.596 8.33079C25.9865 7.94027 25.9865 7.30711 25.596 6.91658L19.2321 0.55262C18.8415 0.162096 18.2084 0.162096 17.8178 0.55262C17.4273 0.943144 17.4273 1.57631 17.8178 1.96683L23.4747 7.62369L17.8178 13.2805C17.4273 13.6711 17.4273 14.3042 17.8178 14.6948C18.2084 15.0853 18.8415 15.0853 19.2321 14.6948L25.596 8.33079ZM0.888916 8.62369H24.8889V6.62369H0.888916V8.62369Z'
        fill={color}
      />
    </svg>
  )
}
/* eslint-enable max-len */

export default ArrowIcon
