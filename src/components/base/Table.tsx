import React, { HTMLAttributes } from 'react';

export type TableHeaderCellProps =
  & React.PropsWithChildren
  & {
    className?: string;
  };

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  children,
  className,
}) => (
  <th
    className={`
      border border-1 border-slate-400
      bg-slate-200
      ${className}
    `}
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
}) => (
  <td
    className={`
      border border-1 border-slate-400
      ${className}
    `}
  >
    {children}
  </td>
);

export const TableRow: React.FC<HTMLAttributes<HTMLTableRowElement>> = ({
  children,
  className,
}) => (
  <tr
    className={`
      group-[.table-stripe]:even:bg-slate-100
      ${className}
    `}
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
}) => (
  <table
    className={`
      border-collapse
      ${stripe && 'group table-stripe'}
      ${className}
    `}
  >
    {children}
  </table>
);

export default Table;
