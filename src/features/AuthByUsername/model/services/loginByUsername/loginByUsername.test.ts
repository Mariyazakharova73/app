import { loginByUsername } from './loginByUsername'
import { setAuthUserdata } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('loginByUsername', () => {
  //   let dispatch: Dispatch
  //   let getState: () => StateSchema

  //   beforeEach(() => {
  //     dispatch = jest.fn()
  //     getState = jest.fn()
  //   })

  //   test('success login', async () => {
  //     const userValue = { username: '123', id: '1' }
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
  //     const action = loginByUsername({ username: '123', password: '123' })
  //     const res = await action(dispatch, getState, undefined)
  //     expect(dispatch).toHaveBeenCalledWith(setAuthUserdata(userValue))
  //     expect(dispatch).toHaveBeenCalledTimes(3)
  //     // запрос был отпрвлен
  //     expect(mockedAxios.post).toHaveBeenCalled()
  //     expect(res.meta.requestStatus).toBe('fulfilled')
  //     expect(res.payload).toEqual(userValue)
  //   })
  //   test('403 status', async () => {
  //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //     const action = loginByUsername({ username: '123', password: '123' })
  //     const res = await action(dispatch, getState, undefined)
  //     expect(dispatch).toHaveBeenCalledTimes(2)
  //     // запрос был отпрвлен
  //     expect(mockedAxios.post).toHaveBeenCalled()
  //     expect(res.meta.requestStatus).toBe('rejected')
  //     expect(res.payload).toBe('Вы ввели неверный логин или пароль')
  //   })

  test('success login', async () => {
    const userValue = { username: '123', id: '1' }

    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const res = await thunk.callThunk({ username: '123', password: '123' })
    expect(thunk.dispatch).toHaveBeenCalledWith(setAuthUserdata(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('fulfilled')
    expect(res.payload).toEqual(userValue)
  })

  test('403 status', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const res = await thunk.callThunk({ username: '123', password: '123' })
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    // запрос был отпрвлен
    expect(thunk.api.post).toHaveBeenCalled()
    expect(res.meta.requestStatus).toBe('rejected')
    expect(res.payload).toBe('Вы ввели неверный логин или пароль')
  })
})
