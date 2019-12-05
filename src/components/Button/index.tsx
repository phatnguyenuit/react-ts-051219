import React, { FC, memo } from 'react';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  status: string;
}

export const ButtonComponent: FC<ButtonProps> = props => {
  const { status, children, ...rest } = props;
  return (
    <button {...rest}>
      {children} - {status}
    </button>
  );
};

const Button = memo(ButtonComponent);
export default Button;
