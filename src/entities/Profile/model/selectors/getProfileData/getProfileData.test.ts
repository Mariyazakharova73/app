import { type StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getProfileData } from './getProfileData'

describe('getProfileData', () => {
  test('should return value', () => {
    const data = {
      username: 'admin',
      age: 22,
      country: Country.Armenia,
      lastname: 'react',
      first: 'name',
      city: 'Moscow',
      currency: Currency.EUR,
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: data,
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
