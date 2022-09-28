import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../feature/counter/CounterSlice';
import themeReducer from '../feature/theme/themeSlice'
export const store = configureStore({
    reducer: {
        counter : counterReducer,
        theme : themeReducer,
    },
})