import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { getProfileForm } from '../selectors/getProfileForm/getProfileForm'
import { type Profile } from './../types/profile'

export const updateProfileData = createAsyncThunk<
Profile,
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
void,
ThunkConfig<string>
>(
  'profile/updateProfileData',

  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const formData = getProfileForm(getState())

    try {
      const res = await extra.api.put<Profile>('/profile', formData)
      return res.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
