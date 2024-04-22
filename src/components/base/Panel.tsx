import React, { HTMLAttributes } from 'react';

export type PanelProps =
  & HTMLAttributes<HTMLDivElement>;

const Panel: React.FC<PanelProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`
        rounded-md shadow-md
        px-6 py-6
        outline outline-1 outline-slate-300
        bg-white
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
};

export default Panel;
