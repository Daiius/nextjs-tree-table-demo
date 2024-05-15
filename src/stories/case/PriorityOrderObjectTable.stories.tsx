import { Meta, StoryObj } from '@storybook/react';
import PriorityOrderObjectTable, {
	PriorityOrderObjectTableProps,
} from '@/components/case/PriorityOrderObjectTable';
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

const meta: Meta<typeof PriorityOrderObjectTable<Data>> = {
  component: PriorityOrderObjectTable<Data>,
  title: 'Case/PriorityOrderObjectTable',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
	args: { keys, id: d => d.id },
}
export default meta;

type Story = StoryObj<typeof PriorityOrderObjectTable<Data>>;

const PriorityOrderObjectTableWithHooks: React.FC<PriorityOrderObjectTableProps<Data>> = (props) => {
	const [data, setData] = React.useState<Data[]>(dataToShow);
	return (
		<PriorityOrderObjectTable<Data>
			{...props}
			data={data}
			onDataChange={(id, key, value) => setData(
				data.map(d => d.id === id ? { ...d, [key]: value} : d)
			)}
		/>
	);
};

export const Example: Story = {
	render: args => <PriorityOrderObjectTableWithHooks {...args} />,
}

