import React from 'react';
import ObjectTable, { ObjectTableProps } from '../case/ObjectTable';
import { usePriorityOrder } from '@/hooks/usePriorityOrder';
import PriorityOrderMark from '../base/PriorityOrderMark';
import { TableHeaderCell } from '../base/Table';


export type PriorityOrderObjectTableProps<T> =
  & ObjectTableProps<T>; 

const PriorityOrderObjectTable = <T extends object,>({
  data,
  keys,
  onDataChange,
  id,
}: PriorityOrderObjectTableProps<T>): React.ReactNode => {
  
  const { 
    orders, 
    onChange, 
    orderedData 
  } = usePriorityOrder({ data });
  
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
      keys={keys}
      id={id}
      onDataChange={onDataChange}
      headerCell={(key) =>
        <TableHeaderCell onClick={() => onToggle(key)}>
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

