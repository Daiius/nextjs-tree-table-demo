import React from 'react';

import Panel from './Panel';

const DropdownMenu: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <ul className="
    list-none
    absolute
    translate-y-2 translate-x-1
    invisible
    peer-hover:visible hover:visible
    w-fit text-nowrap
    "
  >
    {children}
  </ul>
);

const DropdownMenuItem: React.FC<React.PropsWithChildren> = ({
  children
}) => (
  <li className="
    border-l border-r border-1 border-slate-300
    bg-white/80
    text-slate-600
    first:rounded-t first:border-t
    last:rounded-b last:border-b
    border-collapse
    px-1 py-1
    hover:bg-sky-100
    select-none">
    {children}
  </li>
);

const FilterDropdown: React.FC = () => (
  <div 
    className="flex flex-row relative"
  >
    <div className="flex flex-col">
      <div className="peer w-min">
        <i className="
          bi bi-funnel peer"
        />
      </div>

      <DropdownMenu>
        <DropdownMenuItem>
          メニューアイテム1
        </DropdownMenuItem>
        <DropdownMenuItem>
          メニューアイテム2
        </DropdownMenuItem>
        <DropdownMenuItem>
          メニューアイテム3
        </DropdownMenuItem>
      </DropdownMenu>
    </div>
    
  </div>
);

export default FilterDropdown;
