export type TUserStore = TGuestUser & TRegisteredUser

export type TGuestUser = {
  isGuest: true
  isAdmin: boolean
}

export type TRegisteredUser = {
  isGuest: boolean
  isAdmin: boolean
  inAdmin: boolean
  nickname: string
  email: string
  avatar: string
}
