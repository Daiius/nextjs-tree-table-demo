import React from 'react';

export type DrawerProps = 
  & React.PropsWithChildren
  & React.HTMLAttributes<HTMLDivElement>
  & {
    show: boolean;
    onShowChange: (newShow: boolean) => void;
    header: React.ReactNode;
  };

const Drawer: React.FC<DrawerProps> = ({
  show,
  onShowChange,
  header,
  className,
  children,
  ...props
}) => (
  <div
    className={`
      flex flex-col group active:translate-y-1
      group ${show && 'show'}
      relative
      rounded-md 
      border border-1 border-slate-300
      ${className}
    `}
    {...props}
  >
    <div>
      {header}
    </div>
    <div
      className={`
      min-w-full
        absolute
        translate-y-0
        opacity-0
        group-[.show]:opacity-100
        group-[.show]:translate-y-[120%]
        group-[.show]:duration-500
      `}
    >
      {children}
    </div>
  </div>
);

export default Drawer;
