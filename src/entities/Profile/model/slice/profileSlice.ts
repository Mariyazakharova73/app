import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfiledata/updateProfiledata'
import { type ProfileSchema } from '../types/profile'
import { type Profile } from './../types/profile'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
  form: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      }
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.validateErrors = undefined
      state.form = state.data
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })

      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false
          state.data = action.payload
          state.form = action.payload
          state.error = undefined
        }
      )

      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })
    // update Profile
      .addCase(updateProfileData.pending, (state, action) => {
        state.validateErrors = undefined
        state.isLoading = true
      })

      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false
          state.data = action.payload
          state.form = action.payload
          state.readonly = true
          state.validateErrors = undefined
        }
      )

      .addCase(updateProfileData.rejected, (state, action) => {
        state.validateErrors = action.payload
        state.isLoading = false
      })
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
