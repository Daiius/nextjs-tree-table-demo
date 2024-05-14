import { renderHook, act } from '@testing-library/react';
import { useFilter } from './useFilter';
import { Result } from 'postcss';

export type TestData = {
  id: number;
  '名前': string;
  'コメント': string;
}

const testData: TestData[] = [
  { id: 1, '名前': 'Jane Doe', 'コメント': 'Hello!' },
  { id: 2, '名前': 'John Doe', 'コメント': 'Nice to meet you!' },
];

const keys = [...new Set(
  testData.flatMap(d => Object.keys(d))
)].filter(key => key != 'id') as (keyof TestData)[];

describe('useFilter 単体テスト', () => {
  it('初期化時には filterArray は空', () => {
    const data = [...testData];
    
    const { result } = renderHook(() => useFilter({ data, keys }));

    expect(result.current.filterArray['名前'].length).toBe(0);
    expect(result.current.filterArray['コメント'].length).toBe(0);

    expect(result.current.filteredData.length).toBe(data.length);
  });

  it('onFilterDictChanged("名前", "Jane Doe", true) -> filterArray["名前"] = ["Jane Doe"]', () => {
    const data = [...testData];
    const { result } = renderHook(() => useFilter({ data, keys }));

    act(() => result.current.onFilterDictChange('名前', 'Jane Doe', true));

    expect(result.current.filterArray['名前'].length).toBe(1);
    expect(result.current.filterArray['コメント'].length).toBe(0);
    
    expect(result.current.filterArray['名前'][0]).toBe('Jane Doe');
    expect(result.current.filteredData.length).toBe(1);
  });

  it('初期化→key追加でfilterDictエントリを増やす', () => {
    const data = [...testData];
    renderHook(() => useFilter({ data, keys }));

    const { result } = renderHook(() => useFilter({ data, keys: [...keys, 'テスト' as keyof TestData]}));

    expect('テスト' in result.current.filterDict).toBeTruthy();
    expect(result.current.filterArray['テスト' as keyof TestData].length).toBe(0);
  })

  it('初期化→key追加→値変更でfilterDictが更新される', () => {
    const data = [...testData];
    renderHook(() => useFilter({ data, keys }));
    const { result } = renderHook(() => useFilter({ data, keys: [...keys, 'テスト' as keyof TestData]}));
    act(() =>
      result.current.onValueChange(
        'テスト' as keyof TestData, 
        undefined,
        'test value',
      )
    );
    expect('テスト' in result.current.filterDict).toBeTruthy();
    expect(result.current.filterDict['テスト' as keyof TestData]['test value']).toBe(false);
  })
});
