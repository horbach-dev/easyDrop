export type TUserStore = TRegisteredUser

export type TGuestUser = {
  isGuest: true
  isAdmin: boolean
}

export type TRegisteredUser = {
  isAdmin: boolean
  id: string
  username: string
  password: string
  phone: string
  telegram: string
}
