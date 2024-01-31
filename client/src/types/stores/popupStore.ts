export type TPopup = {
  name: string
  payload: Record<string, any>
}

export type TPopupStore = {
  active: TPopup['name'] | null
  queue: TPopup[]
}
