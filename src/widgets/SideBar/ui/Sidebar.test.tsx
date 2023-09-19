import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import Sidebar from 'widgets/SideBar/ui/Sidebar'
import { componetRender } from 'shared/lib/tests/componetRender/componetRender'

describe('Sidebar', () => {
  test('Sidebar render', () => {
    componetRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Sidebar toggle', () => {
    componetRender(<Sidebar/>)
    const toggleBth = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBth)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
