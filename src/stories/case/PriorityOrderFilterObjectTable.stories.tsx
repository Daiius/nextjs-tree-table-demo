import { Meta, StoryObj } from '@storybook/react';
import PriorityOrderFilterObjectTable from '@/components/case/PriorityOrderFilterObjectTable';
import React from 'react';


type Data = {
  id: number,
  '名前': string;
  'コメント': string;
}

const dataToShow: Data[] = [
  { id: 1, '名前': 'Jane Doe', 'コメント': 'Hello!' },
  { id: 2, '名前': 'John Doe', 'コメント': 'Nice to meet you!' },
];

const keys = [...new Set(
  dataToShow.flatMap(d => Object.keys(d))
)].filter(key => key != 'id') as (keyof Data)[];

const meta: Meta<typeof PriorityOrderFilterObjectTable<Data>> = {
  component: PriorityOrderFilterObjectTable,
  title: 'Case/PriorityOrderFilterObjectTable',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: { keys }
}
export default meta;

type Story = StoryObj<typeof PriorityOrderFilterObjectTable>;

export const Example: Story = {
  render: ({ keys }) => {
    const [data, setData] = React.useState<Data[]>(dataToShow);
    return (
      <PriorityOrderFilterObjectTable<Data>
        data={data}
        keys={keys}
        onDataChange={(id, key, value) => setData(
          data.map(d => d.id === id ? { ...d, [key]: value} : d)
        )}
        id={(d: Data) => d.id}
      />
    );
  },
}