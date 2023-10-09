import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileError, type Profile } from '../../types/profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const updateProfileData = createAsyncThunk<
Profile,
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
void,
ThunkConfig<validateProfileError[]>
>(
  'profile/updateProfileData',

  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const formData = getProfileForm(getState())
    const errors = validateProfileData(formData)

    if (errors.length) {
      // завершаем выполение thunk
      return rejectWithValue(errors)
    }

    try {
      const res = await extra.api.put<Profile>('/profile/' + formData?.id, formData)

      if (!res.data) {
        throw new Error()
      }
      return res.data
    } catch (e) {
      console.log(e)
      return rejectWithValue([validateProfileError.SERVER_ERROR])
    }
  }
)
