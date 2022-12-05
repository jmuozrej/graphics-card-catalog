import { configureStore } from '@reduxjs/toolkit'
import graphicReducer from './states/graphicCards'

export const store = configureStore({
    reducer: {
        graphics: graphicReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch