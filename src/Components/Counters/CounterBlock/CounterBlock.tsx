import React, {MouseEvent} from 'react';
import '../CounterStyle.sass'
import {Button} from '../../Common/Button(universal)/Button';
import {changeButtonStateAC, setCounterAC} from "../../../redux/actions";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";


export const CounterBlock = () => {
   const dataCounter = useAppSelector((state)=> state.counter)
    const dispatch = useAppDispatch()

    const counterLimiter = (disabled: boolean): void => {
        dispatch(setCounterAC(dataCounter.counterValue + 1))
        switch (dataCounter.counterValue) {
            case dataCounter.maxValue - 1:
                dispatch(changeButtonStateAC(disabled))
                break;
        }
    }

    const resetNumber = (disabled: boolean): void => {
        dispatch(setCounterAC(dataCounter.startValue))
        dataCounter.counterValue === dataCounter.maxValue
          ? dispatch(changeButtonStateAC(disabled))
          : dispatch(changeButtonStateAC(!disabled))
    }

    const clickIncrementHandler = (e: MouseEvent<HTMLButtonElement>): void => {
        counterLimiter(e.currentTarget.disabled)
    }

    const clickResetHandler = (e: MouseEvent<HTMLButtonElement>): void => {
        resetNumber(e.currentTarget.disabled)
    }


    const changingDisplayNumber = dataCounter.counterValue === dataCounter.maxValue
      ? <h1 className={'LimitingNumber'}>{dataCounter.counterValue}</h1>
      : <h1>{dataCounter.counterValue}</h1>

    const errorMessage = dataCounter.error && <h1 className={'errorMessage'}>{dataCounter.error}</h1>
    const messageWhenSelectingSettings = dataCounter.message && <h1 className={'message'}>{dataCounter.message}</h1>

    const disableIncButton = dataCounter.counterValue >= dataCounter.maxValue || !!dataCounter.error.length || !!dataCounter.message.length
    const disableResetButton = dataCounter.counterValue <= dataCounter.startValue || !!dataCounter.error || !!dataCounter.message

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