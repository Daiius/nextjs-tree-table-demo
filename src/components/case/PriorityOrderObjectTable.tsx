import React from 'react';
import ObjectTable from '../case/ObjectTable';
import Input from '../base/Input';
import { usePriorityOrder } from '@/hooks/usePriorityOrder';
import PriorityOrderMark from '../base/PriorityOrderMark';
import { TableHeaderCell } from '../base/Table';


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
    <ObjectTable<T>
      data={orderedData}
      id={id}
      onDataChange={onDataChange}
      keysToExclude={keysToExclude}
      headerCell={(key) =>
        <TableHeaderCell
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
      }
    />
  );
};

export default PriorityOrderObjectTable;
