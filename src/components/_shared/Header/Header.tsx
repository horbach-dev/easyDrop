import React from 'react'
import { NavLink } from '$components/_shared/Link'
import Logo from '$components/_shared/Logo'
import { scrollToCalculator } from '$utils/scrollToCalculator'

import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__content'>
        <Logo />
        <NavLink
          to='automation'
          className='header__link header__link_calculate'
          onClick={scrollToCalculator}
        >
          {'Рассчитать'}
        </NavLink>
      </div>
    </header>
  )
}

export default Header
