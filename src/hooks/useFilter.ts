import React from 'react';

export type UseFilterArgs<T> = {
  data: T[];
  keys: (keyof T)[];
}

export type FilterDict<T> = {
  [key in keyof T]: {[value: string]: boolean}
}

export type UseFilterResult<T> = {
  filterArray: {[key in keyof T]: string[]};
  filteredData: T[];
  onFilterDictChange: (key: keyof T, value: string, newChecked: boolean) => void;
  filterDict: FilterDict<T>;
}

export const useFilter = <T extends object>({ 
  data,
  keys,
}: UseFilterArgs<T>): UseFilterResult<T> => {

  const [filterDict, setFilterDict] =
    React.useState<FilterDict<T>>(
      Object.fromEntries(keys.map((key: keyof T) =>
        [
          key as keyof T,
          Object.fromEntries(
            data.filter(d => d[key] != null)
              .map(d => [d[key], false])
          )
        ]
      ) 
    ) as FilterDict<T>
  );

  const onFilterDictChange = (key: keyof T, value: string, newChecked: boolean) => {
    setFilterDict({
      ...filterDict,
      [key]: {
        ...filterDict[key],
        [value]: newChecked
      }
    });
  };

  var filterArray: { [key in keyof T]: string[]} = Object.fromEntries(
    (Object.entries(filterDict) as [keyof T, {[value: string]: boolean}][])
      .map(([key, vdict]) => [
        key,
        Object.entries(vdict)
          .filter(([value, checked]) => value != null && checked)
          .map(([value, _]) => value)
    ])
  ) as {[key in keyof T]: string[]};

  var filteredData = [...data];
  
  for (const key of keys) {
    console.log(filteredData);
    console.log(key);
    console.log(filterArray);

    if (filterArray[key] == null) continue;
    if (filterArray[key].length === 0) continue;

    filteredData = filteredData.filter(d => {
        const value_str = (d[key] as any)?.toString();
        const result = filterArray[key].includes(value_str);
        return result;
    })
  }

  return {
    filterArray,
    filteredData,
    onFilterDictChange,
    filterDict,
  };
};