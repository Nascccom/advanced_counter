import React from 'react';
import {Input} from '../../../Common/Input (universal)/Input';
import '../SettingsBlock.sass'

type InputSettingValueProps = {
    className: string
    nameSetting: string
    value: number
    valueHandler: (valueAsNumber: number, disabled: boolean) => void
}

export const InputSettingValue: React.FC<InputSettingValueProps> = ({className, nameSetting, value, valueHandler}) => {

    const getValueHandler = (value: number, disabled: boolean) => {
        valueHandler(value, disabled )
    }

    return (
      <div>
          <span>{nameSetting}</span>
          <Input className={className}
                 value={value}
                 callBack={getValueHandler}
          />
      </div>
    );
};
