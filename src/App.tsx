import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterBlock} from './Components/Counters/CounterBlock/CounterBlock';
import {SettingsBlock} from './Components/Counters/SettingsBlock/SettingsBlock';

function App() {
    const [counterValue, setCounterValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [isDisabled, setDisabled] = useState(false)

    const setLS = () => {
        localStorage.setItem('settingMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('settingStartValue', JSON.stringify(startValue))
        localStorage.setItem('counterValue', JSON.stringify(startValue))
    }
    const getDataLS = () => {
        let settingMaxValue = localStorage.getItem('settingMaxValue')
        let settingStartValue = localStorage.getItem('settingStartValue')
        let counterValue = localStorage.getItem('counterValue')

        settingMaxValue !== null ? setMaxValue(JSON.parse(settingMaxValue)) : setMaxValue(maxValue)
        settingStartValue !== null ? setStartValue(JSON.parse(settingStartValue)) : setStartValue(startValue)
        counterValue !== null ? setCounterValue(JSON.parse(counterValue)) : setCounterValue(startValue)
    }

    const changeSetValues = (startValue: number, maxValue: number) => {
        setStartValue(startValue)
        setCounterValue(startValue)
        setMaxValue(maxValue)
        setMessage('')
        setLS()
    }

    const setCounter = (value: number) => {
        setCounterValue(value)
        localStorage.setItem('counterValue', JSON.stringify(value))
    }

    useEffect(() => {
        getDataLS()
    }, [])

    return (
      <div className={'App'}>
          <SettingsBlock changeSetValues={changeSetValues}
                         setStartValue={setStartValue}
                         startValue={startValue}
                         setMaxValue={setMaxValue}
                         maxValue={maxValue}
                         setError={setError}
                         error={error}
                         setMessage={setMessage}
                         message={message}
                         setDisabled={setDisabled}
          />
          <CounterBlock startValue={startValue}
                        maxValue={maxValue}
                        setCounterValue={setCounter}
                        counterValue={counterValue}
                        error={error}
                        message={message}
                        setDisabled={setDisabled}
                        isDisabled={isDisabled}
          />
      </div>
    );
}

export default App;
