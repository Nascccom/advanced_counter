import React, {ChangeEvent} from 'react';

type InputTypeProps = {
    className: string
    callBack: (value: number, disabled: boolean) => void
    value: number
}

export const Input: React.FC<InputTypeProps> = ({className, callBack, value}) => {

    const getValue = (e: ChangeEvent<HTMLInputElement>)=> {
        callBack(+e.currentTarget.value, e.currentTarget.disabled)
    }

    return (
      <input type="number"
             className={className}
             onChange={getValue}
             value={value}
      />
    );
};
