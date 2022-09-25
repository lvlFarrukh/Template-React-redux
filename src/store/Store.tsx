import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './reduxSlice/LoginSlice'
import brandReducer from './reduxSlice/brandSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        brands: brandReducer
    },
  })