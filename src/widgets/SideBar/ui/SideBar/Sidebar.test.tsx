import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import Sidebar from 'widgets/Sidebar/ui/Sidebar/Sidebar'
import { withTranslation } from 'react-i18next'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
  test('Sidebar render', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)
    renderWithTranslation(<SidebarWithTranslation />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Sidebar toggle', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)
    renderWithTranslation(<SidebarWithTranslation />)
    const toggleBth = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBth)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
