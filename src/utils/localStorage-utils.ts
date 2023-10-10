import {RootState} from "../redux/store";


export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('app-state')
        if (!serializedState) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('app-state', serializedState)
    } catch (err) {

    }
}