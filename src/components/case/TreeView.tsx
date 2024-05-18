import React from 'react';
import clsx from 'clsx';
import GroupTable from '../base/GroupTable';



type Data = {
	name: string;
}

const data: Data[][][] = [
	[[{ name: 'a' }]],
	[[{ name: 'b' }]],
	[[{ name: 'c' }, {name: 'c'}], [{ name: 'd' }]],
	[[{ name: 'e' }], [{ name: 'f' }], [{ name: 'g' }]],
];

const TreeView: React.FC = () => (
	<div className='grid grid-cols-4'>
		{data.map(col =>
			<div className={clsx(
				'grid row-span-3 grid-rows-subgrid h-min',
				'border border-1 border-slate-400',
			)}>
				{/*
				<GroupTable<Data>
					keys={['name']}
					dataGroup={Object.groupBy<string, Data>(row, d => d.name)}
					identifier={d => d.name}
					onDataChange={(id, key, newValue, oldValue) => {}}
					className='grid row-span-1 grid-rows-subgrid'
				/>
				*/}
				{col.map(group => 
					<div className={clsx(
						'grid grid-rows-subgrid row-span-3',
					)}>
						{group.map(d =>
							<div className={clsx(
								'w-10 h-10 bg-slate-300',
							)}>
								{d.name}
							</div>
						)}
					</div>
				)}
			</div>
		)}
	</div>
);

export default TreeView;

