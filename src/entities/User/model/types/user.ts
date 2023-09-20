export interface User {
  id: string
  username: string
}

// authData = undefined, User не авторизован
export interface UserSchema {
  authData?: User
}
