import { propagateServerField } from 'next/dist/server/lib/render-server';
import React from 'react';

export type ButtonSizes =
  | 'lg'
  | 'md'
  | 'sm';

export type ButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: ButtonSizes;
  };

const sizeToStyleDict = {
  'lg': 'px-3 py-2',
  'md': 'px-2 py-1',
  'sm': 'px-1 py-0',
};

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  className,
  ...props
}) => {
  return (
    <button
      className={`
        rounded-md font-semibold
        text-sky-500
        ${sizeToStyleDict[size]}
        outline outline-1 outline-sky-500
        hover:bg-sky-200 hover:text-sky-600
        disabled:bg-slate-100
        disabled:outline-sky-200
        disabled:text-sky-200
        enabled:active:outline-2
        enabled:active:outline-sky-500
        transition
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
