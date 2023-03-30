import {commonActionsType} from "./actions";

const initialState: initialStateType = {
    counterValue: 0,
    startValue: 0,
    maxValue: 5,
    error: '',
    message: '',
    isDisabled: false
}
export type initialStateType = {
    counterValue: number,
    startValue: number,
    maxValue: number,
    error: string,
    message: string,
    isDisabled: boolean
}


export const counterReducer = (state: initialStateType = initialState, action: commonActionsType): initialStateType => {
    switch (action.type) {
        case "CHANGE-SET-VALUE":
            return {
                ...state,
                counterValue: state.startValue,
                message: '',
            }
        case "SET-COUNTER-VALUE":
            return {
                ...state,
                counterValue: action.currentValue
            }
        case "SET-START-VALUE":
            return {
                ...state,
                startValue: action.value
            }
        case "SET-MAX-VALUE":
            return {
                ...state,
                maxValue: action.value
            }
        case "SET-ERROR-AND-MESSAGE-TEXT":
            return {
                ...state,
                error: action.errorText,
                message: action.messageText
            }
        case "CHANGE-STATE-BUTTON":
            return {
                ...state,
                isDisabled: action.isDisabled
            }
        default:
            return state
    }
}


