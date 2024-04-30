import React from 'react';

export type UseFilterArgs<T> = {
  data: T[];
}

export type FilterDict<T> = {
  [key in keyof T]: {
    values: (string | number | any)[];
    filterValue: (string | number | any)[];
  }
}

export type UseFilterResult<T> = {
  filterDict: FilterDict<T>;
  filteredData: T[];
  onFilterChange: (key: keyof T, newFilter: string | number | any) => void;
}

export const useFilter = <T>(
  { data }: UseFilterArgs<T>
): UseFilterResult<T> => {

  const [filterDict, setFilterDict] =
    React.useState<FilterDict<T>>({} as FilterDict<T>);

  const onFilterChange = (key: keyof T, newFilter: string | number | any) => {

  };

  return {
    filterDict,
    filteredData: [],
    onFilterChange,
  };
};