import { fetchProfileData } from './model/services/fetchProfileData'
import { profileActions, profileReducer } from './model/slice/profileSlice'
import { type Profile, type ProfileSchema } from './model/types/profile'
import ProfileCard from './ui/ProfileCard/ProfileCard'

export { type Profile, type ProfileSchema, profileActions, profileReducer, fetchProfileData, ProfileCard }
