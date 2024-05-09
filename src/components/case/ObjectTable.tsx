import React from 'react';
import Table, { 
  TableHeader, TableHeaderCell,
  TableBody, TableRow, TableCell,
} from '../base/Table';
import Input from '../base/Input';


export type ObjectTableProps<T> = {
  data: T[];
  keys: (keyof T)[];
  onDataChange: (id: number|string, key: string, value: string) => void;
  id: (data: T) => number | string;
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
  keys,
  onDataChange,
  id,
  headerCell,
}: ObjectTableProps<T>): React.ReactNode => (
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
          {keys.map(key =>
            <TableCell key={key.toString()}>
              <Input
                borderless
                value={d[key] as any}
                onChange={e => onDataChange(
                  id(d), key.toString(), e.target.value
                )}
              />
            </TableCell>
          )}
        </TableRow>
      )}
    </TableBody>
  </Table>
);

export default ObjectTable;
