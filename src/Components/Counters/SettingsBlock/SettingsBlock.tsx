import React, {MouseEvent} from 'react';
import '../CounterStyle.sass';
import './SettingsBlock.sass'
import {Button} from '../../Common/Button(universal)/Button';
import {InputSettingValue} from './InputSettingValue/InputSettingValue';

type SettingsBlockTypeProps = {
    startValue: number
    setStartValue: (value: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
    changeSetValues: (startValue: number, maxValue: number) => void
    setError: (error: string) => void
    error: string
    setMessage: (error: string) => void
    setDisabled: (disabled: boolean) => void
    message: string
}

export const SettingsBlock: React.FC<SettingsBlockTypeProps> = ({
                                                                    startValue,
                                                                    setStartValue,
                                                                    changeSetValues,
                                                                    maxValue,
                                                                    setMaxValue,
                                                                    setError,
                                                                    error,
                                                                    setMessage,
                                                                    setDisabled,
                                                                    message
                                                                }) => {
      const clickSetHandler = (e: MouseEvent<HTMLButtonElement>) => {
          changeSetValues(startValue, maxValue)
          setDisabled(e.currentTarget.disabled)
      }

      const checkConditionCounter = (value: number, type: 'start' | 'max'): boolean => {
          const valueType = type === 'start' ? maxValue : startValue;
          const conditionMain = value < 0 || valueType < 0 || valueType === value

          switch (type) {
              case 'start':
                  return conditionMain || valueType < value
              case 'max':
                  return conditionMain || valueType > value
          }
      }
      const startValueHandler = (valueAsNumber: number, disabled: boolean) => {
          setStartValue(valueAsNumber)
          if (checkConditionCounter(valueAsNumber, 'start')) {
              setError('Incorrect value')
              setMessage('')
              setDisabled(!disabled)
          } else {
              setError('')
              setMessage('Enter value and press "set"')
              setDisabled(disabled)
          }
      }
      const maxValueHandler = (valueAsNumber: number, disabled: boolean) => {
          setMaxValue(valueAsNumber)
          if (checkConditionCounter(valueAsNumber, 'max')) {
              setError('Incorrect value')
              setMessage('')
              setDisabled(!disabled)
          } else {
              setError('')
              setMessage('Enter value and press "set"')
              setDisabled(disabled)
          }
      }
      const disabledSetButton = !!error || message.length === 0

      return (
        <div className={'ContainerCounter'}>
            <div className={'DisplayBorder'}>
                <div className={'Display ValuesMaxAndMin'}>
                    <InputSettingValue className={error ? 'errorInput' : ''}
                                       nameSetting={'Max value:'}
                                       value={maxValue}
                                       setValueFunc={setMaxValue}
                                       valueHandler={maxValueHandler}
                    />
                    <InputSettingValue className={error ? 'errorInput' : ''}
                                       nameSetting={'Start value:'}
                                       value={startValue}
                                       setValueFunc={setStartValue}
                                       valueHandler={startValueHandler}

                    />
                </div>
            </div>
            <div className={'ButtonsContainer'}>
                <Button className={'Button'}
                        onClick={clickSetHandler}
                        nameButton={'set'}
                        disabled={disabledSetButton}/>
            </div>
        </div>
      );
  }
;