import { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import FilterDropdown from '@/components/base/FilterDropdown';
import { fn } from '@storybook/test';

const meta: Meta<typeof FilterDropdown> = {
  component: FilterDropdown,
  title: 'Base/FilterDropdown',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    show: true,
  }
}
export default meta;

type Story = StoryObj<typeof FilterDropdown>;

type TestData = {
  id: number;
  '名前': string;
  'コメント': string;
}

const data: TestData[] = [
  { id: 1, '名前': 'Jane Doe', 'コメント': 'Hello!' },
  { id: 2, '名前': 'John Doe', 'コメント': 'Nice to meet you!' },
];

export const Example: Story = {
  render: ({ show }) => {
    const [valueDict, setValueDict] = React.useState<{
      [key: string]: boolean
    }>(Object.fromEntries(data.map(d => [d['名前'], false])));
    
    return (
      <FilterDropdown
        label='名前'
        show={show}
        valueDict={valueDict}
        onValueDictChange={(key, newChecked) => 
          setValueDict({...valueDict, [key]: newChecked})
        }
        onValueDictReset={() => 
          setValueDict(Object.fromEntries(
            Object.entries(valueDict)
              .map(([value, _]) => [value, false])
          ))
        }
      /> 
    );
  },
}
