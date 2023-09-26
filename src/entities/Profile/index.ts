import { fetchProfileData } from './model/services/fetchProfileData'
import { profileActions, profileReducer } from './model/slice/profileSlice'
import { type Profile, type ProfileSchema } from './model/types/profile'
import ProfileCard from './ui/ProfileCard/ProfileCard'
import { getProfileError } from './model/selectors/getProfileError/getProfileError'
import { getProfileData } from './model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadOnly } from './model/selectors/getProfileReadOnly/getProfileReadOnly'
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm'
import { updateProfileData } from './model/services/updateProfiledata'

export {
  type Profile,
  type ProfileSchema,
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
  getProfileError,
  getProfileData,
  getProfileIsLoading,
  getProfileReadOnly,
  getProfileForm,
  updateProfileData
}
