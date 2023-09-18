import React from 'react'
import { render, screen } from '@testing-library/react'
import Button, { ThemeButton } from 'shared/ui/Button/Button'

describe('button', () => {
  test('button render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
  test('button clear class', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  })
})
