import React, {ChangeEvent} from 'react';
import {Input} from '../../../Input (universal)/Input';
import '../SettingsBlock.sass'

type InputSettingValueProps = {
    className: string
    nameSetting: string
    value: number
    setValueFunc: (value: number) => void
    valueHandler: (valueAsNumber: number, disabled: boolean, setValueFunc: (value: number) => void) => void
}

export const InputSettingValue: React.FC<InputSettingValueProps> = ({
                                                                        className,
                                                                        nameSetting,
                                                                        value,
                                                                        setValueFunc,
                                                                        valueHandler,
                                                                    }) => {
    const getValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        valueHandler(e.currentTarget.valueAsNumber, e.currentTarget.disabled, setValueFunc)
    }


    return (
      <div>
          <span>{nameSetting}</span>
          <Input className={className}
                 value={value}
                 onChange={getValueHandler}
          />
      </div>
    );
};
