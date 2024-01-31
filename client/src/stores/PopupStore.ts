import { makeStore, TStoreType } from '$services/store'

import { TPopupStore } from '$types/stores/popupStore'

const defaultState = {
  active: null,
  queue: [],
}

const PopupStore: TStoreType<TPopupStore> = makeStore(defaultState, 'popup')

export default PopupStore
