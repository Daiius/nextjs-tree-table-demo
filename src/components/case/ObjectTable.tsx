import React from 'react';
import Table, { 
  TableHeader, TableHeaderCell,
  TableBody, TableRow, TableCell,
} from '../base/Table';
import Input from '../base/Input';


export type ObjectTableProps<T> = {
  data: T[];
  onDataChange: (id: number|string, key: string, value: string) => void;
  id: (data: T) => number | string;
  keysToExclude?: string[];
  headerCell?: (key: keyof T) => React.ReactNode;
}

type DefaultHeaderCellProps = {
  label: string;
}
const DefaultHeaderCell: React.FC<DefaultHeaderCellProps> = ({
  label,
}) => (
  <TableHeaderCell>
    {label}
  </TableHeaderCell>
);

const ObjectTable = <T extends object,>({
  data,
  onDataChange,
  id,
  keysToExclude = [],
  headerCell,
}: ObjectTableProps<T>): React.ReactNode => {
  
  const keys = Object.keys(data[0])
    .filter(key => !keysToExclude.includes(key)) as (keyof T)[];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {keys.map(key => 
            headerCell != null
            ? headerCell(key)
            : <DefaultHeaderCell label={key.toString()}/>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((d: T) =>
          <TableRow key={id(d)}>
            {Object.entries(d)
              .filter(([key, _]) => !keysToExclude.includes(key))
              .map(([key, value]) =>
                <TableCell key={key}>
                  <Input
                    borderless
                    value={value}
                    onChange={e => onDataChange(
                      id(d), key, e.target.value
                    )}
                  />
                </TableCell>
              )
            }
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ObjectTable;
