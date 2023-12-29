import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LocaleActions from '$actions/Locale'
import { getValidLocaleUrl, isValidLocale as localeValidate } from '$services/LocaleManager'
import ContentStore from '$stores/ContentStore'
import { loadTranslations } from '$utils/i18n'

import { TLocale } from '$types/index'
import { usePrevious } from '$hooks/usePrevious'

let _isInitialized = false

export default function useInitApp () {
  const [isInitialized, setIsInitialized] = useState(_isInitialized)
  const params = useParams()
  const locale = params.locale as TLocale
  const navigate = useNavigate()

  const isValidLocale = useMemo(() => localeValidate(locale), [locale])

  const appInitializer = async () => {
    await loadTranslations(locale)

    LocaleActions.initLocaleStore(locale)

    setIsInitialized(true)
    _isInitialized = true
  }

  const path = params?.['*']
  const prevRoute = usePrevious(path)

  useEffect(() => {
    if (path !== prevRoute) {
      window.scrollTo(0, 0)
    }
  }, [path, prevRoute])

  useEffect(() => {
    if (!isValidLocale) {
      const newUrl = getValidLocaleUrl(locale)

      return navigate(newUrl)
    }

    fetch('/config.json')
      .then(response => response.json())
      .then(response => {
        !isInitialized && appInitializer()
        ContentStore.mergeOntoState(response)
      })
      .catch(error => console.error('Ошибка при загрузке файла config.json', error))
  }, [isValidLocale, isInitialized])

  return isInitialized && isValidLocale
}
