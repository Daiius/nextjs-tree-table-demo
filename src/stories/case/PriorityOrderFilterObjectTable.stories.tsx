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

const meta: Meta<typeof PriorityOrderFilterObjectTable> = {
  component: PriorityOrderFilterObjectTable,
  title: 'Case/PriorityOrderFilterObjectTable',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta;

type Story = StoryObj<typeof PriorityOrderFilterObjectTable>;

export const Example: Story = {
  render: () => {
    const [data, setData] = React.useState<Data[]>(dataToShow);
    return (
      <PriorityOrderFilterObjectTable<Data>
        data={data}
        onDataChange={(id, key, value) => setData(
          data.map(d => d.id === id ? { ...d, [key]: value} : d)
        )}
        id={(d: Data) => d.id}
        keysToExclude={['id']}
      />
    );
  },
}