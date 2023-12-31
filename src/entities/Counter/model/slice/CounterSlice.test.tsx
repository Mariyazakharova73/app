import { type CounterSchema } from '../types/counterSchema'
import { counterReducer, counterActions } from './CounterSlice'

describe('CounterSlice}', () => {
  test('inc', () => {
    const state: CounterSchema = {
      value: 10,
    }
    expect(counterReducer(state, counterActions.increment)).toEqual({
      value: 11,
    })
  })
  test('dec', () => {
    const state: CounterSchema = {
      value: 10,
    }
    expect(counterReducer(state, counterActions.decrement)).toEqual({
      value: 9,
    })
  })
  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.decrement)).toEqual({
      value: -1,
    })
  })
})
