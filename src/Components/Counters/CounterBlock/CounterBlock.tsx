import React, {MouseEvent} from 'react';
import '../CounterStyle.sass'
import {Button} from '../../Common/Button(universal)/Button';

type CounterBlockTypeProps = {
    startValue: number
    maxValue: number
    setCounterValue: (value: number) => void
    counterValue: number
    error: string
    message: string
    setDisabled: (disabled: boolean) => void
    isDisabled: boolean
}

export const CounterBlock: React.FC<CounterBlockTypeProps> = ({
                                                                  startValue,
                                                                  maxValue,
                                                                  setCounterValue,
                                                                  counterValue,
                                                                  error,
                                                                  message,
                                                                  setDisabled
                                                              }) => {
    const counterLimiter = (disabled: boolean): void => {
        setCounterValue(counterValue + 1)
        switch (counterValue) {
            case maxValue - 1:
                setDisabled(disabled)
                break;
        }
    }
    const resetNumber = (disabled: boolean): void => {
        setCounterValue(startValue)
        counterValue === maxValue
        ? setDisabled(disabled)
        : setDisabled(!disabled)
    }

    const clickIncrementHandler = (e: MouseEvent<HTMLButtonElement>): void => {
        counterLimiter(e.currentTarget.disabled)
    }
    const clickResetHandler = (e: MouseEvent<HTMLButtonElement>): void => {
        resetNumber(e.currentTarget.disabled)
    }

    const changingDisplayNumber = counterValue === maxValue
      ? <h1 className={'LimitingNumber'}>{counterValue}</h1>
      : <h1>{counterValue}</h1>

    const errorMessage = error && <h1 className={'errorMessage'}>{error}</h1>
    const messageWhenSelectingSettings = message && <h1 className={'message'}>{message}</h1>

    const disableIncButton = counterValue >= maxValue || !!error.length || !!message.length
    const disableResetButton = counterValue <= startValue || !!error || !!message

    return (
      <div className={'ContainerCounter'}>
          <div className={'DisplayBorder'}>
              <div className={'Display'}>
                  {errorMessage || messageWhenSelectingSettings || changingDisplayNumber}
              </div>
          </div>
          <div className={'ButtonsContainer'}>
              <Button className={'Button'}
                      onClick={clickIncrementHandler}
                      disabled={disableIncButton}
                      nameButton={'inc'}/>

              <Button className={'Button'}
                      onClick={clickResetHandler}
                      disabled={disableResetButton}
                      nameButton={'reset'}/>
          </div>
      </div>
    );
};