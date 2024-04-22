import React, { InputHTMLAttributes } from 'react';

export type InputProps =
  InputHTMLAttributes<HTMLInputElement> & {
    borderless?: boolean;
  };

const borderedStyles = `
  outline outline-1 outline-slate-300
  has-[:focus]:outline
  has-[:focus]:outline-2
  has-[:focus]:outline-sky-300
`;

const borderlessStyles = `
  outline-none outline-0
  has-[:focus]:outline
  has-[:focus]:outline-1
  has-[:focus]:outline-slate-300
`;

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  disabled,
  borderless = false,
  type,
  autoComplete,
  className,
  ...props
}) => {

  const borderStyles = borderless
    ? borderlessStyles
    : borderedStyles;

  return (
    <div
      className={`
        outline outline-1 outline-slate-300
        rounded-md
        ${borderStyles}
        ${className}
      `}
      {...props}
    >
      <input
        className={`
          focus:outline-none
          px-2 py-1
          bg-transparent
        `}
        type={type}
        autoComplete={autoComplete}
        value={value} onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
