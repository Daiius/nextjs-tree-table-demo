import React from 'react';

export type UseFilterArgs<T> = {
  data: T[];
}

/**
 * フィルター結果返却用のデータ型
 * {
 *   '列名1': ['値1', '値2', ...],
 *   ...
 * }
 */


export type UseFilterResult<T> = {
  filterArray: {[key in keyof T]: string[]};
  filteredData: T[];
  onFilterDictChange: (key: keyof T, value: string, newChecked: boolean) => void;
}

export const useFilter = <T extends object>(
  { data }: UseFilterArgs<T>
): UseFilterResult<T> => {

  const keys = [...new Set(
    data.flatMap(d => Object.keys(d))
  )] as (keyof T)[];

  type FilterDict<T> = {
    [key in keyof T]: {[value: string]: boolean}
  }

  const [filterDict, setFilterDict] =
    React.useState<FilterDict<T>>(
      Object.fromEntries(keys.map((key: keyof T) =>
        [
          key as keyof T,
          Object.fromEntries(
            data.map(d => [d[key], false])
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
          .filter(([_, checked]) => checked)
          .map(([value, _]) => value)
    ])
  ) as {[key in keyof T]: string[]};

  var filteredData = [...data];
  
  for (const key of keys) {
    console.log(filteredData);
    console.log(key);
    console.log(filterArray);
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
  };
};