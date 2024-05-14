import React, { HTMLAttributes } from 'react';

export type TableHeaderCellProps =
  HTMLAttributes<HTMLTableCellElement>;

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  children,
  className,
  ...props
}) => (
  <th
    className={`
      border border-1 
      border-slate-400 bg-slate-500
      dark:border-slate-500 dark:bg-slate-600
      ${className}
    `}
    {...props}
  >
    {children}
  </th>
);

export const TableHeader: React.FC<React.PropsWithChildren> = ({
  children
}) => (
  <thead>
    {children}
  </thead>
);

export const TableCell: React.FC<HTMLAttributes<HTMLTableCellElement>> = ({
  children,
  className,
  ...props
}) => (
  <td
    className={`
      border border-1 border-slate-400
      ${className}
    `}
    {...props}
  >
    {children}
  </td>
);

export const TableRow: React.FC<HTMLAttributes<HTMLTableRowElement>> = ({
  children,
  className,
  ...props
}) => (
  <tr
    className={`
      group-[.table-stripe]:even:bg-slate-100
      ${className}
    `}
    {...props}
  >
    {children}
  </tr>
);

export const TableBody: React.FC<React.PropsWithChildren> = ({
  children,
}) => ( <tbody>{children}</tbody> );

export type TableProps =
  & HTMLAttributes<HTMLTableElement>
  & {
    stripe?: boolean;
  };

const Table: React.FC<TableProps> = ({
  children,
  stripe = false,
  className,
  ...props
}) => (
  <table
    className={`
      border-collapse
      ${stripe && 'group table-stripe'}
      ${className}
    `}
    {...props}
  >
    {children}
  </table>
);

export default Table;
