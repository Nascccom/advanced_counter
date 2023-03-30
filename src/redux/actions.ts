export type commonActionsType = changeSetValuesACType
  | setCounterACType | setStartValueACType
  | setMaxValueACType | setErrorAndMessageACType
  | changeButtonStateACType

type changeSetValuesACType = ReturnType<typeof changeSetValuesAC>
export const changeSetValuesAC = () => {
    return {
        type: 'CHANGE-SET-VALUE'
    } as const
}

type setCounterACType = ReturnType<typeof setCounterAC>
export const setCounterAC = (currentValue: number) => {
    return {
        type: 'SET-COUNTER-VALUE',
        currentValue
    } as const
}

type setStartValueACType = ReturnType<typeof setStartValueAC>
export const setStartValueAC = (value: number) => {
    return {
        type: 'SET-START-VALUE',
        value
    } as const
}
type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET-MAX-VALUE',
        value
    } as const
}
type setErrorAndMessageACType = ReturnType<typeof setErrorAndMessageAC>
export const setErrorAndMessageAC = (errorText: string, messageText: string) => {
    return {
        type: 'SET-ERROR-AND-MESSAGE-TEXT',
        errorText,
        messageText
    } as const
}

type changeButtonStateACType = ReturnType<typeof changeButtonStateAC>
export const changeButtonStateAC = (isDisabled: boolean) => {
    return {
        type: 'CHANGE-STATE-BUTTON',
        isDisabled
    } as const
}










