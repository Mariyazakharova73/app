import { validateProfileError, type Profile } from './../../types/profile'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [validateProfileError.NO_DATA]
  }
  const { first, lastname, age, city } = profile
  const errors: validateProfileError[] = []

  if (!first || !lastname) {
    errors.push(validateProfileError.INCORRECT_USER_DATA)
  }

  if (!age) {
    errors.push(validateProfileError.INCORRECT_AGE)
  }

  if (!city) {
    errors.push(validateProfileError.INCORRECT_CITY)
  }

  return errors
}
