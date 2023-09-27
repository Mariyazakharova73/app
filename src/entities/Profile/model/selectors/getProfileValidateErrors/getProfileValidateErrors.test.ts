import { type StateSchema } from 'app/providers/StoreProvider'
import { validateProfileError } from '../../types/profile'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrors', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [validateProfileError.SERVER_ERROR]
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([validateProfileError.SERVER_ERROR])
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
