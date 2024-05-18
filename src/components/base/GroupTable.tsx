import React from 'react';
import Table, {
	TableRow, TableCell,
	TableHeader, TableHeaderCell,
	TableBody,
} from '@/components/base/Table';
import Input from '@/components/base/Input';
import {ObjectTableProps} from '../case/ObjectTable';

type DefaultHeaderCellProps = {
  label: string;
}
const DefaultHeaderCell: React.FC<DefaultHeaderCellProps> = ({
  label,
}) => (
  <TableHeaderCell>
    {label}
  </TableHeaderCell>
);



type TableFragmentProps<T> = 
	& ObjectTableProps<T>
  & {
		groupKey: string;
	};

function TableFragment<T>({
	data,
	keys,
	identifier,
	groupKey,
	headerCell,
	onDataChange,
}: TableFragmentProps<T>): React.ReactNode {
	return (
		<>
			<TableHeader>
				{groupKey &&
					<TableRow>
						<div>{groupKey}</div>
					</TableRow>
				}
				<TableRow>
					{keys.map(key =>
						headerCell != null
						? headerCell(key)
						: <DefaultHeaderCell key={key.toString()} label={key.toString()}/>
					)}
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map(d =>
					<TableRow key={identifier(d)}>
						{keys.map(key =>
							<TableCell key={key.toString()}>
								<Input
									borderless
									value={d[key] as any}
									onChange={e => onDataChange(
										identifier(d), 
										key.toString(), 
										e.target.value,
										d[key] as any, 
									)}
								/>
							</TableCell>
						)}
					</TableRow>
				)}
				<TableRow className='h-4'/>
			</TableBody>
		</>
	);
};

export type GroupTableProps<T> = 
	& {
		dataGroup: { [groupKey: string]: T[] | undefined };
		keys: (keyof T)[];
		identifier: (data: T) => number | string;
		onDataChange: (id: string | number, key: string, newValue: string, oldValue: string) => void;
	};

function GroupTable<T extends object>({
	dataGroup,
	keys,
	identifier,
	onDataChange,
	...props
}: GroupTableProps<T>): React.ReactNode {
	return (
		<Table
			{...props}
		>
			{Object.entries(dataGroup)
				.map(([groupKey, group]) =>
					<TableFragment<T>
						groupKey={groupKey}
						keys={keys}
						data={group ?? []}
						onDataChange={onDataChange}
						identifier={identifier}
					/>
				)
			}
		</Table>
	);
};

export default GroupTable;

