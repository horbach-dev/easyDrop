import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getValidLocaleUrl } from './LocaleManager'

export default class RouterService {
  static LocaleRedirect ({ isAdmin }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { locale, pathname } = useParams()

    if (isAdmin && pathname?.includes('/admin')) return null

    return <Navigate to={getValidLocaleUrl(locale)}/>
  }
}
