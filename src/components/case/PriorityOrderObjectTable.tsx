import React from 'react';
import Table, { 
  TableHeader, TableHeaderCell,
  TableBody, TableRow, TableCell,
} from '../base/Table';
import Input from '../base/Input';
import { usePriorityOrder } from '@/hooks/usePriorityOrder';
import PriorityOrderMark from '../base/PriorityOrderMark';


export type PriorityOrderObjectTableProps<T> = {
  data: T[];
  onDataChange: (id: number|string, key: string, value: string) => void;
  id: (data: T) => number | string;
  keysToExclude?: string[];
}

const PriorityOrderObjectTable = <T extends object,>({
  data,
  onDataChange,
  id,
  keysToExclude = [],
}: PriorityOrderObjectTableProps<T>): React.ReactNode => {
  
  const keys = Object.keys(data[0])
    .filter(key => !keysToExclude.includes(key)) as (keyof T)[];

  const { orders, onChange, orderedData } = usePriorityOrder({ data });
  console.log(orders);

  const onToggle = (key: keyof T) => {
    console.log(key);
    switch (orders[key]?.orderType) {
      case 'Ascending':
        onChange(key, 'Descending');
        break;
      case 'Descending':
        onChange(key, undefined);
        break;
      default:
        onChange(key, 'Ascending');
        break;
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {keys.map(key => 
            <TableHeaderCell
              key={key.toString()}
              onClick={() => onToggle(key)}
            >
              <div className="flex flex-row">
                <div>{key.toString()}</div>
                <PriorityOrderMark
                  priority={orders[key]?.priority}
                  orderType={orders[key]?.orderType}
                />
              </div>
            </TableHeaderCell>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {orderedData.map((d: T) =>
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

export default PriorityOrderObjectTable;
