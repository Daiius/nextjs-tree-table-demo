import React, { HTMLAttributes } from 'react';

export type DropdownMenuProps =
  & React.PropsWithChildren
  & HTMLAttributes<HTMLDivElement>
  & {
    show?: boolean;
  };

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  show = false,
  className,
  ...props
}) => (
  <ul className={`
    flex flex-col
    list-none
    absolute
    translate-y-2 translate-x-1
    ${show
      ? "visible opacity-100"
      : "invisible opacity-20 duration-500"
    }
    bg-white/80
    peer-hover:visible peer-hover:opacity-100
    peer-hover:duration-0
    hover:visible hover:opacity-100
    hover:duration-0
    w-fit text-nowrap
    border border-1 border-slate-300
    rounded-md
    ${className}
    `}
  >
    {children}
  </ul>
);

export const DropdownMenuItem: React.FC<React.PropsWithChildren> = ({
  children
}) => (
  <li className="
    text-slate-600
    px-1 py-1
    hover:bg-sky-100
    select-none
    active:bg-sky-200
    first:rounded-t-md last:rounded-b-md"
  >
    {children}
  </li>
);

export default DropdownMenu;
