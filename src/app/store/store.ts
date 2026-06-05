import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import cart from '../../features/basketSlice/ui/basketSlice'
import authSlice from '../../shared/common/model/useStore/slice'

export const store = configureStore({
    reducer: { cart, authSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch