import { renderHook, act } from '@testing-library/react';
import { useFilter } from './useFilter';
import { resourceLimits } from 'worker_threads';

export type TestData = {
  id: number;
  '名前': string;
  'コメント': string;
}

const testData: TestData[] = [
  { id: 1, '名前': 'Jane Doe', 'コメント': 'Hello!' },
  { id: 2, '名前': 'John Doe', 'コメント': 'Nice to meet you!' },
];

describe('useFilter 単体テスト', () => {
  it('初期化時には filterArray は空', () => {
    const data = [...testData];
    const { result } = renderHook(() => useFilter({ data }));

    expect(result.current.filterArray['名前'].length).toBe(0);
    expect(result.current.filterArray['id'].length).toBe(0);
    expect(result.current.filterArray['コメント'].length).toBe(0);

    expect(result.current.filteredData.length).toBe(data.length);
  });

  it('onFilterDictChanged("名前", "Jane Doe", true) -> filterArray["名前"] = ["Jane Doe"]', () => {
    const data = [...testData];
    const { result } = renderHook(() => useFilter({ data }));

    act(() => result.current.onFilterDictChange('名前', 'Jane Doe', true));

    expect(result.current.filterArray['名前'].length).toBe(1);
    expect(result.current.filterArray['id'].length).toBe(0);
    expect(result.current.filterArray['コメント'].length).toBe(0);
    
    expect(result.current.filterArray['名前'][0]).toBe('Jane Doe');
    expect(result.current.filteredData.length).toBe(1);
  });
});