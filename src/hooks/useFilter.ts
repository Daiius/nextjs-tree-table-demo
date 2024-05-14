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
  onValueChange: (key: keyof T, oldValue: string|undefined, newValue: string|undefined) => void;
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

  // キーが追加されたとき、filterDictにエントリを追加する
  const newFilterDictEntry: FilterDict<T> = {} as FilterDict<T>;
  for (const key of keys) {
    if (key in filterDict) continue;
    newFilterDictEntry[key] = Object.fromEntries(
      [...new Set(data.flatMap(d => d[key]))].map(value => [value, false])
    );
  }
  if (Object.keys(newFilterDictEntry).length > 0) {
    setFilterDict({...filterDict, ...newFilterDictEntry});
  }

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

  const onValueChange = (key: keyof T, oldValue: string|undefined, newValue: string|undefined) => {
    if (key in filterDict && oldValue != null) {
      // 既存のキーに対して、undefinedでない値が変更されるとき...
      // 変更前のエントリは削除することになる
      const filterDictEntryWithoutOldValue = {
        ...filterDict,
        [key]: {
          ...Object.keys(filterDict[key])
                .filter(value => value != oldValue)
                .map(value => ({ [value]: filterDict[key][value] }))
                .reduce((acc, curr) => ({ ...acc, ...curr }))
        }
      };

      if (newValue == null) {
        // 新しい値がundefinedならば、単純にエントリを削除する
        setFilterDict(filterDictEntryWithoutOldValue);
      } else {
        // それ以外の場合は、エントリを入れ替える
        setFilterDict({
          ...filterDict, 
          [key]: {
            ...filterDictEntryWithoutOldValue,
            [newValue]: true,
          }
        });
      }
    } else {
      // keyがfilterDict内に無い、またはoldValueがundefinedのとき、
      // newValueがnullならばなにもせず、
      // newValueが not null ならば新しいエントリを追加する
      if (newValue != null) {
        setFilterDict({ ...filterDict, [key]: { [newValue]: false }});
      }
    }
  };

  var filteredData = [...data];
  
  for (const key of keys) {
    //console.log(filteredData);
    //console.log(key);
    //console.log(filterArray);

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
    onValueChange,
    filterDict,
  };
};

