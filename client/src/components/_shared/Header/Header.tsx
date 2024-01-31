import React from 'react'
import { PopupActions } from '$actions/PopupActions'
import Button from '$components/_shared/Button'
import { NavLink } from '$components/_shared/Link'
import Logo from '$components/_shared/Logo'
import useStore from '$hooks/useStore'
import { scrollToCalculator } from '$utils/scrollToCalculator'

import './Header.scss'
import UserStore from '$stores/UserStore'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [username] = useStore(UserStore, store => store.username)
  const nav = useNavigate()

  return (
    <header className='header'>
      <div className='container header__content'>
        <Logo />
        <div className='header__content'>
          <NavLink
            to='automation'
            className='header__link header__link_calculate'
            onClick={scrollToCalculator}
          >
            {'Calculate'}
          </NavLink>
          {/*<NavLink*/}
          {/*  to='automation'*/}
          {/*  className='header__link header__link_calculate'*/}
          {/*  onClick={scrollToCalculator}*/}
          {/*>*/}
          {/*  {locale.toLocaleUpperCase()}*/}
          {/*</NavLink>*/}
          <Button
            className='header__link header__link_account'
            onClick={() => {
              if (username) {
                nav('/profile')
              } else {
                PopupActions.showPopup('Login')
              }
            }}
          >
            {'Profile'}
          </Button>
          {/*<Button*/}
          {/*  // icon={DownloadIcon}*/}
          {/*  className='header__link header__link_calculate'*/}
          {/*  onClick={() => PopupActions.showPopup('DownloadGuide')}*/}
          {/*>*/}
          {/*  {'Кабинет'}*/}
          {/*</Button>*/}
          {/*<NavLink*/}
          {/*  to='automation'*/}
          {/*  className='header__link header__link_calculate'*/}
          {/*  onClick={scrollToCalculator}*/}
          {/*>*/}
          {/*  {'Connect Wallet'}*/}
          {/*</NavLink>*/}
        </div>
      </div>
    </header>
  )
}

export default Header
