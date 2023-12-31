import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
import { getUserInited } from './model/selectors/getUserInited/getUserInited'
import {
  userReducer,
  setAuthUserdata,
  initialAuthData,
  logout,
} from './model/slice/UserSlice'
import { type User, type UserSchema } from './model/types/user'

export {
  userReducer,
  type User,
  type UserSchema,
  setAuthUserdata,
  initialAuthData,
  getUserAuthData,
  logout,
  getUserInited,
}
