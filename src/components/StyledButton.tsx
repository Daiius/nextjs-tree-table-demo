import React from 'react';

const StyledButton: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  return (
    <button
      className={`
        rounded-md bg-sky-500
        text-white font-semibold
        px-3 py-2
      `}
    >
      {children}
    </button>
  );
}

export default StyledButton;
