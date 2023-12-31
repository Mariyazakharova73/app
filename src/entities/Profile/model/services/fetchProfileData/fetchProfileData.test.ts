import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

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
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const res = await thunk.callThunk('1')
    expect(thunk.api.get).toHaveBeenCalled()

    expect(res.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const res = await thunk.callThunk('1')

    expect(res.meta.requestStatus).toBe('rejected')
  })
})
