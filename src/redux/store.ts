import {counterReducer} from "./reducer";
import {configureStore} from "@reduxjs/toolkit";
import {loadState, saveState} from "../utils/localStorage-utils";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    preloadedState: loadState()
})

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store