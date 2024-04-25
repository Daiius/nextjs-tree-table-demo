import { Meta, StoryObj } from '@storybook/react';

import Table, {
  TableBody, TableRow, TableCell, TableHeader, TableHeaderCell
} from '@/components/base/Table';

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Base/Table',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: (
      <>
        <TableHeader>
          <TableHeaderCell>列1</TableHeaderCell>
          <TableHeaderCell>列2</TableHeaderCell>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>値1-1</TableCell>
            <TableCell>値1-2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>値2-1</TableCell>
            <TableCell>値2-2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>値3-1</TableCell>
            <TableCell>値3-2</TableCell>
          </TableRow>
        </TableBody>
      </>
    )
  }
}
export default meta;

type Story = StoryObj<typeof Table>;

export const Example: Story = {
}

export const StripeTable: Story = {
  args: { stripe: true }
}