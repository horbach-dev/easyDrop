import React from 'react'
import { NavLink } from '$components/_shared/Link'
import Logo from '$components/_shared/Logo'
import { scrollToCalculator } from '$utils/scrollToCalculator'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__decor'></div>
        <div className='footer__content'>
          <Logo />
          <NavLink
          to='automation'
          onClick={scrollToCalculator}
          className='footer__link footer__link_calculate'
        >
            {'Рассчитать'}
          </NavLink>
        </div>
        <p className='footer__copyright'>
          {'Creat with 🤍 by Easy Agency'}
        </p>
      </div>
    </footer>
  )
}

export default Footer
