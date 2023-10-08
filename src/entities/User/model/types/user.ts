export interface User {
  id: string
  username: string
  avatar?: string
}

// authData = undefined, User не авторизован
export interface UserSchema {
  authData?: User
  _inited?: boolean
}
