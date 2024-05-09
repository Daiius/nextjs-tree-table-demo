import React from 'react';
import DropdownMenu, { 
  DropdownMenuItem,
  DropdownMenuProps,
 } from './DropdownMenu';
import Input from './Input';
import Button from './Button';

export type FilterDropdownProps = 
  & DropdownMenuProps
  & {
    label: string;
    valueDict: { [key: string]: boolean};
    onValueDictChange: (key: string, newChecked: boolean) => void;
    onValueDictReset: () => void;
  };

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  valueDict,
  onValueDictChange,
  onValueDictReset,
  show,
}) => {
  const [filterString, setFilterString] = React.useState<string>("");

  const filteredDict: {[key: string]: boolean} = 
    filterString
    ? Object.fromEntries(
        Object.entries(valueDict ?? {})
          .filter(([value, _]) => value.includes(filterString))
      )
    : {...valueDict};
  
  const isFilterEmpty: boolean =
      Object.values(valueDict ?? {}).every(b => !b);

  return (
    <div 
      className="flex flex-row relative"
    >
      <div className="flex flex-col">
        <div className="peer w-min">
          <i className={`
            bi peer
            ${isFilterEmpty
              ? 'bi-funnel text-slate-400'
              : 'bi-funnel-fill text-slate-400'
            }
            `}
          />
        </div>

        <DropdownMenu
          className='p-2'
          show={show}
        >
          <span
            className='text-slate-500 text-sm'
          >
            {`"${label}" の絞り込み：`}
          </span>
          <div className='flex flex-row'>
            <i className='bi bi-search self-center text-slate-500'/>
            <Input
              placeholder='検索...'
              value={filterString}
              onChange={e => setFilterString(e.target.value)}
            />
          </div>
          <div className='flex flex-row'>
            <span className='text-sm'>一覧：</span>
            <span className='
              text-xs ms-auto mt-1 mr-2
              text-slate-500'
            >
              {Object.keys(filteredDict).length}/
              {Object.keys(valueDict ?? {}).length} 件
            </span>
            <span className='
              text-xs mt-1
              text-slate-500'
            >
              {Object.values(valueDict ?? {}).filter(v => v).length} 選択
            </span>
          </div>
          <div className='
            border border-1 border-slate-300
            rounded-md
            flex flex-col
            mb-3 px-2
            max-h-32 overflow-auto
            '
          >
            {Object.entries(filteredDict).map(([value, checked]) =>
              <div className='flex flex-row'>
                <input
                  className='mr-1 mt-1'
                  type='checkbox'
                  checked={checked}
                  onChange={e => onValueDictChange(value, !checked)}
                />
                <div
                  key={value}
                >
                  {value}
                </div>
              </div>
            )}
          </div>

          <Button className='
            outline-red-600 text-red-600
            self-end font-thin'
            size='sm'
            onClick={onValueDictReset}
          >
            リセット
          </Button>
        </DropdownMenu>
      </div>
      
    </div>
  );
};

export default FilterDropdown;
