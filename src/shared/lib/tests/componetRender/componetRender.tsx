import { render } from '@testing-library/react'
import React, { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nTests from 'shared/config/i18n/i18nTests'

export interface renderWithRouterOptions {
  route?: string
}

// оборачивает тестируемый компонент в обертку
export function componetRender (
  component: ReactNode,
  options: renderWithRouterOptions = {}
) {
  const { route = '/' } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nTests}>{component}</I18nextProvider>
    </MemoryRouter>
  )
}
