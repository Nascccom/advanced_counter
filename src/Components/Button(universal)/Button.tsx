import React, {MouseEvent} from 'react';

type ButtonTypeProps = {
    className: string
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    nameButton: string
    disabled?: boolean
}

export const Button: React.FC<ButtonTypeProps> = ({
                                                      className,
                                                      nameButton,
                                                      onClick,
                                                      disabled
                                                  }) => {
    return (
      <button className={className}
              onClick={onClick}
              disabled={disabled}>
          {nameButton}
      </button>
    );
};

