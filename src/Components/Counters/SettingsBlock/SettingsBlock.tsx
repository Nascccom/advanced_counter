import React, {MouseEvent} from 'react';
import '../CounterStyle.sass';
import './SettingsBlock.sass'
import {Button} from '../../Common/Button(universal)/Button';
import {InputSettingValue} from './InputSettingValue/InputSettingValue';
import {
    changeButtonStateAC,
    changeSetValuesAC,
    setErrorAndMessageAC,
    setMaxValueAC,
    setStartValueAC
} from "../../../redux/actions";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";


export const SettingsBlock = () => {
      const dataCounter = useAppSelector((state) => state.counter)
      const dispatch = useAppDispatch()

      // useEffect(() => {
      //     dispatch(setValuesFromLocalStorageTC())
      // }, [])

      const checkConditionCounter = (value: number, type: 'start' | 'max'): boolean => {
          const valueType = type === 'start' ? dataCounter.maxValue : dataCounter.startValue;
          const conditionMain = value < 0 || valueType < 0 || valueType === value

          switch (type) {
              case 'start':
                  return conditionMain || valueType < value
              case 'max':
                  return conditionMain || valueType > value
          }
      }

      const mergedDispatchesOnError = (disabled: boolean) => {
          dispatch(setErrorAndMessageAC('Incorrect value', ''))
          dispatch(changeButtonStateAC(!disabled))
      }

      const mergedDispatchesWithoutError = (disabled: boolean) => {
          dispatch(setErrorAndMessageAC('', 'Enter value and press "set"'))
          dispatch(changeButtonStateAC(disabled))
      }

      const startValueHandler = (value: number, disabled: boolean) => {
          dispatch(setStartValueAC(value))
          // dispatch(incValueTC('start', value))

          if (checkConditionCounter(value, 'start')) {
              mergedDispatchesOnError(!disabled)
          } else {
              mergedDispatchesWithoutError(disabled)
          }
      }

      const maxValueHandler = (value: number, disabled: boolean) => {
          dispatch(setMaxValueAC(value))
          // dispatch(incValueTC('max', value))

          if (checkConditionCounter(value, 'max')) {
              mergedDispatchesOnError(!disabled)
          } else {
              mergedDispatchesWithoutError(disabled)
          }
      }

      const clickSetHandler = (e: MouseEvent<HTMLButtonElement>) => {
          dispatch(changeSetValuesAC())
          dispatch(changeButtonStateAC(e.currentTarget.disabled))
      }

      const disabledSetButton = !!dataCounter.error || dataCounter.message.length === 0
      return (
        <div className={'ContainerCounter'}>
            <div className={'DisplayBorder'}>
                <div className={'Display ValuesMaxAndMin'}>
                    <InputSettingValue className={dataCounter.error ? 'errorInput' : ''}
                                       nameSetting={'Max value:'}
                                       value={dataCounter.maxValue}
                                       valueHandler={maxValueHandler}/>
                    <InputSettingValue className={dataCounter.error ? 'errorInput' : ''}
                                       nameSetting={'Start value:'}
                                       value={dataCounter.startValue}
                                       valueHandler={startValueHandler}/>
                </div>
            </div>
            <div className={'ButtonsContainer'}>
                <Button className={'Button'}
                        onClick={clickSetHandler}
                        nameButton={'set'}
                        disabled={disabledSetButton}
                />
            </div>
        </div>
      );
  }
;