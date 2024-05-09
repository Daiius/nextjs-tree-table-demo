import React from 'react';
import ObjectTable, { ObjectTableProps } from '../case/ObjectTable';
import { usePriorityOrder } from '@/hooks/usePriorityOrder';
import PriorityOrderMark from '../base/PriorityOrderMark';
import { TableHeaderCell } from '../base/Table';

import { useFilter } from '@/hooks/useFilter';
import FilterDropdown from '../base/FilterDropdown';

export type PriorityOrderFilterObjectTableProps<T> = 
  & ObjectTableProps<T>;

const PriorityOrderFilterObjectTable= <T extends object,>({
  data,
  keys,
  onDataChange,
  id,
}: PriorityOrderFilterObjectTableProps<T>): React.ReactNode => {

  const {
    filteredData, 
    onFilterDictChange, 
    filterDict,
  } = useFilter({ data, keys });

  const { 
    orders, 
    onChange, 
    orderedData,
  } = usePriorityOrder({ data: filteredData });

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
      onDataChange={onDataChange}
      id={id}
      headerCell={(key) =>
        <TableHeaderCell>
          <div className="flex flex-row">
            <div className='mr-2'>{key.toString()}</div>
            
            <FilterDropdown
              label={key.toString()}
              valueDict={filterDict[key]}
              onValueDictChange={(value, newChecked) => onFilterDictChange(key, value, newChecked)}
              onValueDictReset={() => {}}
            />

            <PriorityOrderMark
              priority={orders[key]?.priority}
              orderType={orders[key]?.orderType}
              onClick={() => onToggle(key)}
              className='ms-auto'
            />
          </div>
        </TableHeaderCell>
      }
    />
  );
};

export default PriorityOrderFilterObjectTable;
