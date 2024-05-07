import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const HeadlessDrawer: React.FC = () => (
  <div>
    <Menu as='div'
      className='
        text-center'
    >
      <MenuButton className='
        rounded-md 
        bg-slate-300
        hover:bg-slate-400
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/75
        p-1'
      >
        Options
        <i className='bi bi-chevron-down'/>
      </MenuButton>

      <MenuItems className='
        rounded-md 
        bg-slate-300 
        mt-2 w-screen
        shadow p-1'
      >
        <MenuItem>
          <button className={`
           data-[focus]:bg-sky-500
            w-full rounded-md`}
          >
            Item1
          </button>
        </MenuItem>
        <MenuItem>
          <button className={`
            data-[focus]:bg-sky-500
            w-full rounded-md`}
          >
            Item2
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  </div>
);

export default HeadlessDrawer;
