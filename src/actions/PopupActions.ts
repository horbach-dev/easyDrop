import PopupStore from '$stores/PopupStore'

import { TPopup } from '$types/stores/popupStore'

export const PopupActions = {
  showPopup (name: TPopup['name'], payload = {}) {
    PopupStore.mergeOntoState({
      active: name,
      queue: [...PopupStore.state.queue, { name, payload }]
    })
  },
  hidePopup () {
    PopupStore.mergeOntoState({
      queue: PopupStore.state.queue.filter(p => p.name !== PopupStore.state.active),
      active: null,
    })
  }
}
