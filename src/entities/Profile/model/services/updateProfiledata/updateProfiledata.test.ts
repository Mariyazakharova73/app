import { updateProfileData } from './updateProfiledata'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
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
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const res = await thunk.callThunk()
    expect(thunk.api.put).toHaveBeenCalled()

    expect(res.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const res = await thunk.callThunk()

    expect(res.meta.requestStatus).toBe('rejected')

    expect(res.payload).toEqual([validateProfileError.SERVER_ERROR])
  })
  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, first: '' },
      },
    })
    const res = await thunk.callThunk()

    expect(res.meta.requestStatus).toBe('rejected')

    expect(res.payload).toEqual([validateProfileError.INCORRECT_USER_DATA])
  })
})
