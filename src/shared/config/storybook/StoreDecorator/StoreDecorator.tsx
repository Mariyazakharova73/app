import 'app/styles/index.scss'
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (Story: any) =>
    (
      <StoreProvider initialState={state as StateSchema}>
        <Story />
      </StoreProvider>
    )
