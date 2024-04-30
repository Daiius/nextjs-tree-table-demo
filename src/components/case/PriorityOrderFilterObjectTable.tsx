import { TableHeaderCell } from '../base/Table';
import PriorityOrderObjectTable from '../case/PriorityOrderObjectTable'; 
import { PriorityOrderObjectTableProps } from '../case/PriorityOrderObjectTable';

import { useFilter } from '@/hooks/useFilter';

export type PriorityOrderFilterObjectTableProps<T> =
  & PriorityOrderObjectTableProps<T>;

const PriorityOrderFilterObjectTable= <T extends object,>({
  data,
  onDataChange,
  id,
  keysToExclude,
}: PriorityOrderFilterObjectTableProps<T>): React.ReactNode => {

  const { filteredData, onFilterDictChange } = useFilter({ data });

  return (
    <PriorityOrderObjectTable<T>
      data={filteredData}
      onDataChange={onDataChange}
      id={id}
      keysToExclude={keysToExclude}
      headerCell={(key) =>
        <TableHeaderCell>

        </TableHeaderCell>
      }
    />
  );
};

export default PriorityOrderFilterObjectTable;
