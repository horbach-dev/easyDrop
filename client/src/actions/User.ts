import cookies from 'js-cookie'
import UserStore from '$stores/UserStore'

import { TUserStore } from '$types/stores/userStore'

export default {
  initUserStore (user: TUserStore) {
    UserStore.mergeOntoState({
      ...user,
      // availableLocales: config.available_locales,
    })
    // cookies.set('token', user.accessToken, { expires: 30 })
  },
}
