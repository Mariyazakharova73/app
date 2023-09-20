import { render } from '@testing-library/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import React, { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nTests from 'shared/config/i18n/i18nTests'
import { DeepPartial } from '@reduxjs/toolkit'

export interface renderWithRouterOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

// оборачивает тестируемый компонент в обертку
export function componetRender (
  component: ReactNode,
  options: renderWithRouterOptions = {}
) {
  const { route = '/', initialState } = options
  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}
