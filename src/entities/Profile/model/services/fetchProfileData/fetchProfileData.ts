import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { type Profile } from '../../types/profile'

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
      if (!res.data) {
        throw new Error()
      }
      return res.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
