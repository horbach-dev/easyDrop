import React from 'react'

interface IProps {
  color?: string
}

/* eslint-disable max-len */
const CopyIcon = ({ color = '#CC00FF' }: IProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.207 0.265747H9.15061C7.31286 0.265733 5.85722 0.265722 4.71801 0.404637C3.54559 0.547602 2.59664 0.848825 1.84828 1.52757C1.09991 2.20632 0.767795 3.06699 0.610167 4.13035C0.457003 5.16359 0.457016 6.48382 0.457032 8.15062V13.6437C0.457032 15.3417 1.82908 16.7492 3.62255 17.0037C3.76052 17.6967 4.02456 18.2881 4.55538 18.7696C5.1573 19.3155 5.91517 19.5503 6.81528 19.6601C7.68225 19.7658 8.78457 19.7658 10.1522 19.7657H13.2619C14.6295 19.7658 15.7318 19.7658 16.5988 19.6601C17.4989 19.5503 18.2568 19.3155 18.8587 18.7696C19.4606 18.2236 19.7195 17.5363 19.8405 16.7199C19.9571 15.9336 19.9571 14.9338 19.957 13.6934V9.05901C19.9571 7.81863 19.9571 6.81885 19.8405 6.03253C19.7195 5.21615 19.4606 4.52878 18.8587 3.98286C18.3279 3.50141 17.6757 3.26193 16.9118 3.1368C16.6311 1.51017 15.0793 0.265747 13.207 0.265747ZM15.3364 3.00588C15.0335 2.20326 14.1946 1.62621 13.207 1.62621H9.20703C7.30021 1.62621 5.94555 1.62766 4.91788 1.75297C3.91179 1.87565 3.33214 2.10573 2.90893 2.48957C2.48573 2.87341 2.23206 3.39913 2.09679 4.31163C1.95863 5.2437 1.95703 6.47235 1.95703 8.20179V13.6437C1.95703 14.5393 2.59327 15.3003 3.4782 15.5749C3.45701 15.0217 3.45702 14.3962 3.45703 13.6934V9.059C3.45701 7.81863 3.45699 6.81885 3.57356 6.03253C3.69457 5.21615 3.95347 4.52878 4.55538 3.98286C5.1573 3.43693 5.91517 3.20212 6.81528 3.09236C7.68225 2.98664 8.78457 2.98666 10.1522 2.98668H13.2619C14.0367 2.98667 14.7264 2.98666 15.3364 3.00588ZM5.61604 4.94485C5.89281 4.69383 6.28138 4.53017 7.01515 4.4407C7.7705 4.34859 8.77162 4.34714 10.207 4.34714H13.207C14.6424 4.34714 15.6436 4.34859 16.3989 4.4407C17.1327 4.53017 17.5213 4.69383 17.798 4.94485C18.0748 5.19587 18.2552 5.54829 18.3539 6.21381C18.4554 6.8989 18.457 7.80688 18.457 9.10877V13.6437C18.457 14.9455 18.4554 15.8535 18.3539 16.5386C18.2552 17.2041 18.0748 17.5566 17.798 17.8076C17.5213 18.0586 17.1327 18.2223 16.3989 18.3117C15.6436 18.4038 14.6424 18.4053 13.207 18.4053H10.207C8.77162 18.4053 7.7705 18.4038 7.01515 18.3117C6.28138 18.2223 5.89281 18.0586 5.61604 17.8076C5.33928 17.5566 5.15883 17.2041 5.06018 16.5386C4.95863 15.8535 4.95703 14.9455 4.95703 13.6437V9.10877C4.95703 7.80688 4.95863 6.8989 5.06018 6.21381C5.15883 5.54829 5.33928 5.19587 5.61604 4.94485Z'
        fill='url(#paint0_linear_1550_65)'/>
      <defs>
        <linearGradient
          id='paint0_linear_1550_65'
          x1='-1.36676'
          y1='-22.0969'
          x2='27.213'
          y2='-20.9205'
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

export default CopyIcon
