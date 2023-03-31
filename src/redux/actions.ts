export type commonActionsType = changeSetValuesACType
  | setCounterACType | setStartValueACType
  | setMaxValueACType | setErrorAndMessageACType
  | changeButtonStateACType

type changeSetValuesACType = ReturnType<typeof changeSetValuesAC>
export const changeSetValuesAC = () => ({type: 'CHANGE-SET-VALUE'}) as const

type setCounterACType = ReturnType<typeof setCounterAC>
export const setCounterAC = (currentValue: number) => ({type: 'SET-COUNTER-VALUE', currentValue}) as const

type setStartValueACType = ReturnType<typeof setStartValueAC>
export const setStartValueAC = (value: number) => ({type: 'SET-START-VALUE', value}) as const

type setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (value: number) => ({type: 'SET-MAX-VALUE', value}) as const

type setErrorAndMessageACType = ReturnType<typeof setErrorAndMessageAC>
export const setErrorAndMessageAC = (errorText: string, messageText: string) => ({type: 'SET-ERROR-AND-MESSAGE-TEXT', errorText, messageText}) as const

type changeButtonStateACType = ReturnType<typeof changeButtonStateAC>
export const changeButtonStateAC = (isDisabled: boolean) => ({type: 'CHANGE-STATE-BUTTON', isDisabled}) as const











