import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { type Profile } from './../types/profile'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const fetchProfileData = createAsyncThunk<
Profile,
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
void,
ThunkConfig<string>
>(
  'profile/fetchProfileData',

  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const res = await extra.api.get<Profile>('/profile')

      return res.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
