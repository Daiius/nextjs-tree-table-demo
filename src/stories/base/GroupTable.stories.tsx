import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import GroupTable, { GroupTableProps } from '@/components/base/GroupTable';


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

const meta: Meta<typeof GroupTable<Data>> = {
  component: GroupTable<Data>,
  title: 'Base/GroupTable',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: { 
		keys,
		identifier: d => d.id,
		dataGroup: Object.groupBy<string, Data>(
			dataToShow, d => d['コメント']
		),
	}
}
export default meta;

type Story = StoryObj<typeof GroupTable<Data>>;

const GroupTableWithHooks: React.FC<GroupTableProps<Data>> = (
	props
) => {
	const [data, setData] = React.useState<Data[]>(dataToShow);
	return (
		<GroupTable<Data>
			{...props}
			dataGroup={
				Object.groupBy<string, Data>(data, d => d['コメント'])
			}
			onDataChange={(id, key, value) => setData(
				data.map(d => d.id === id ? { ...d, [key]: value} : d)
			)}
		/>
	);
};

export const Example: Story = {
  render: (args) => <GroupTableWithHooks {...args}/>
}

