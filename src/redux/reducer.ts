import {commonActionsType} from "./actions";

const initialState = {
    counterValue: 0,
    startValue: 0,
    maxValue: 5,
    error: '',
    message: '',
    isDisabled: false,
}
export type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: commonActionsType): InitialStateType => {
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

// export const incValueTC = (type: 'start' | 'max', value: number) =>
//   (dispatch: AppDispatch, getState: () => RootState) => {
//       const maxValue = getState().counter.maxValue
//       const startValue = getState().counter.startValue
//
//       if (type === 'start') {
//           dispatch(setStartValueAC(value))
//           setLS(maxValue, startValue + 1)
//       } else {
//           dispatch(setMaxValueAC(value))
//           setLS(maxValue + 1, startValue)
//       }
//   }
//
//
// export const setValuesFromLocalStorageTC = () =>
//   (dispatch: AppDispatch) => {
//       getDataLS(dispatch)
//   }