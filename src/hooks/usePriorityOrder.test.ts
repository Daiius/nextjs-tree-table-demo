import { renderHook, act } from '@testing-library/react';
import { usePriorityOrder } from './usePriorityOrder';

export type TestData = {
  id: number;
  '名前': string;
  'コメント': string;
}

const testData: TestData[] = [
  { id: 1, '名前': 'Jane Doe', 'コメント': 'Hello!' },
  { id: 2, '名前': 'John Doe', 'コメント': 'Nice to meet you!' },
];

describe('usePriorityOrder テスト', () => {
  it('初期化時は {} を返す', () => {
    const data = [...testData];
    const { result } = renderHook(() => usePriorityOrder({ data }));

    expect(Object.entries(result.current.orders).length).toBe(0);
  });

  it(`onChange('名前', 'Ascending') -> { '名前': { priority: 1, orderType: 'Ascending' } }`, () => {
    const data = [...testData];
    const { result } = renderHook(() => usePriorityOrder({ data }));
    act(() => result.current.onChange('名前', 'Ascending'));

    expect(Object.entries(result.current.orders).length).toBe(1);
    expect(result.current.orders['名前'].priority).toBe(1);
    expect(result.current.orders['名前'].orderType).toBe('Ascending');
  });
});
