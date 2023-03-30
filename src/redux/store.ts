import {counterReducer} from "./reducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store