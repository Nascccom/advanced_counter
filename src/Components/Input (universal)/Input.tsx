import React, {ChangeEvent} from 'react';

type InputTypeProps = {
    className: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
}

export const Input: React.FC<InputTypeProps> = ({
                                                    className,
                                                    onChange,
                                                    value,

                                                }) => {

    return (
      <input type="number"
             className={className}
             onChange={onChange}
             value={value}
      />
    );
};
