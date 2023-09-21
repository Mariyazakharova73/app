import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { setAuthUserdata, type User } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
User,
LoginByUsernameProps,
{ rejectValue: string }
>(
  'login/loginByUsername',

  async (authData: LoginByUsernameProps, thunkAPI) => {
    try {
      const res = await axios.post<User>(
        'http://localhost:8000/login',
        authData
      )
      if (!res.data) {
        throw new Error()
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data))
      thunkAPI.dispatch(setAuthUserdata(res.data))
      return res.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue(i18n.t(('loginErrorMessage')))
    }
  }
)
