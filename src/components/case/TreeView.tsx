import React from 'react';
import clsx from 'clsx';
import GroupTable from '../base/GroupTable';



type Data = {
	name: string;
}

const data: Data[][] = [
	[{ name: 'a' }],
	[{ name: 'b' }],
	[{ name: 'c' }, {name: 'c'}, { name: 'd' }],
	[{ name: 'e' }, { name: 'f' }, { name: 'g' }],
];

const TreeView: React.FC = () => (
	<div className='flex flex-row'>
		{data.map(row =>
			<GroupTable<Data>
				keys={['name']}
				dataGroup={Object.groupBy<string, Data>(row, d => d.name)}
				identifier={d => d.name}
				onDataChange={(id, key, newValue, oldValue) => {}}
				className='mr-2'
			/>
		)}
	</div>
);

export default TreeView;

