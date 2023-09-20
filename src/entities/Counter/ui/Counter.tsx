/* eslint-disable i18next/no-literal-string */
import { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import Button from 'shared/ui/Button/Button'
import { counterActions } from '../model/slice/CounterSlice'
import { getCounterValue } from './../model/selectors/getCounterValue/getCounterValue'

const Counter: FC = () => {
  const dispatch = useDispatch()

  const counterValue = useSelector(getCounterValue)

  const inc = () => {
    dispatch(counterActions.increment())
  }

  const dec = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button data-testid='inc-btn' onClick={inc}>
        inc
      </Button>
      <Button data-testid='dec-btn' onClick={dec}>
        dec
      </Button>
    </div>
  )
}

export default Counter
