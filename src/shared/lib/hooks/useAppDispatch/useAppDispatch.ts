import { type AppDispatch } from 'app/providers/StoreProvider'
import { useDispatch } from 'react-redux/es/exports'

export const useAppDispatch: () => AppDispatch = useDispatch
