import { validateProfileData } from './validateProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { validateProfileError } from 'entities/Profile/model/types/profile'

const data = {
  username: 'admin',
  age: 22,
  country: Country.Armenia,
  lastname: 'react',
  first: 'name',
  city: 'Moscow',
  currency: Currency.EUR,
}

describe('fetchProfileData', () => {
  test('success', async () => {
    const res = validateProfileData(data)
    expect(res).toEqual([])
  })

  test('without first and lastname', async () => {
    const res = validateProfileData({ ...data, first: '', lastname: '' })
    expect(res).toEqual([validateProfileError.INCORRECT_USER_DATA])
  })

  test('incorrect age', async () => {
    const res = validateProfileData({ ...data, age: undefined })
    expect(res).toEqual([validateProfileError.INCORRECT_AGE])
  })

  test('incorrect country', async () => {
    const res = validateProfileData({ ...data, city: undefined })
    expect(res).toEqual([validateProfileError.INCORRECT_CITY])
  })

  test('incorrect all', async () => {
    const res = validateProfileData(undefined)
    expect(res).toEqual([validateProfileError.NO_DATA])
  })
})
