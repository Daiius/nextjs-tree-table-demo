import React from 'react';

const Header: React.FC = () => (
  <header
    className='
      bg-slate-300 dark:bg-slate-800
      flex flex-row
      p-2
    '
  >
    <div className='flex flex-row px-2'>
      <i className='
        bi bi-tree self-center 
        text-slate-800 dark:text-slate-500'
      />
      <span className='
        hidden sm:block
        font-bold self-center text-lg
        text-slate-800 dark:text-slate-500
        px-2 pointer-events-none
        '
      >
        Next.js Tree Table Demo
      </span>
      <i className='
        bi bi-table self-center 
        text-slate-800 dark:text-slate-500'
      />
    </div>
    
    <button className='
      flex flex-col self-center
      group
      active:translate-y-1'
    >
      <div className='
        flex flex-row self-center'>
        <i className='
          bi bi-search mr-1 
          text-slate-500
          group-hover:text-slate-800
          dark:group-hover:text-slate-400'
        />
        <span className='
          text-slate-500
          group-hover:text-slate-800
          dark:group-hover:text-slate-400'
        >
          検索
        </span>
      </div>
      <i className='
        bi bi-caret-down self-center
        text-sm 
        text-slate-500
        group-hover:text-slate-800
        dark:group-hover:text-slate-400
        -mt-2 -mb-2'
      />
    </button>
    
  </header>
);

export default Header;
