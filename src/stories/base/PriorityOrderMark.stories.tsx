import { Meta, StoryObj } from '@storybook/react';

import PriorityOrderMark from '@/components/base/PriorityOrderMark';

const meta: Meta<typeof PriorityOrderMark> = {
  component: PriorityOrderMark,
  title: 'Base/PriorityOrderMark',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    priority: 1, orderType: 'Ascending',
  }
}
export default meta;

type Story = StoryObj<typeof PriorityOrderMark>;

export const Example: Story = {

}