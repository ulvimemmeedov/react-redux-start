import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slicers/exampleCounter';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})