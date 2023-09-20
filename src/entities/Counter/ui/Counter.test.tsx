import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { componetRender } from 'shared/lib/tests/componetRender/componetRender'
import Counter from './Counter'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  test('Counter render', () => {
    componetRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })

  test('inc', async () => {
    componetRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    })
     await userEvent.click(screen.getByTestId('inc-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })

  test('dec', async () => {
    componetRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    })
    await userEvent.click(screen.getByTestId('dec-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
