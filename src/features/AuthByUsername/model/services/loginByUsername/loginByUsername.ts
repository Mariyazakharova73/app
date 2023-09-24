import { createAsyncThunk } from '@reduxjs/toolkit'
import { setAuthUserdata, type User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
User,
LoginByUsernameProps,
ThunkConfig<string>
>(
  'login/loginByUsername',

  async (authData: LoginByUsernameProps, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI
    try {
      const res = await extra.api.post<User>(
        '/login',
        authData
      )
      if (!res.data) {
        throw new Error()
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data))
      dispatch(setAuthUserdata(res.data))
      return res.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('Вы ввели неверный логин или пароль')
    }
  }
)
