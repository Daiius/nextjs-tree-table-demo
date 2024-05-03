import React from 'react';

const Header: React.FC = () => (
  <header
    className='
      bg-slate-300 dark:bg-slate-800
      flex flex-row
      p-2
    '
  >
    <i className='
      bi bi-tree self-center 
      text-slate-800 dark:text-slate-500'
    />
    <span className='
      hidden sm:block
      font-bold self-center text-lg
      text-slate-800 dark:text-slate-500
      px-2
      '
    >
      Next.js Tree Table Demo
    </span>
    <i className='
      bi bi-table self-center 
      text-slate-800 dark:text-slate-500'
    />
    
  </header>
);

export default Header;
