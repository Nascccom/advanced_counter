import React from 'react';
import './App.css';
import {CounterBlock} from './Components/Counters/CounterBlock/CounterBlock';
import {SettingsBlock} from './Components/Counters/SettingsBlock/SettingsBlock';

function App() {
    return (
      <div className={'App'}>
          <SettingsBlock />
          <CounterBlock />
      </div>
    );
}

export default App;
