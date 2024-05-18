
import { Meta, StoryObj } from '@storybook/react';

import TreeView from '@/components/case/TreeView';

const meta: Meta<typeof TreeView> = {
  component: TreeView,
  title: 'Case/TreeView',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta;

type Story = StoryObj<typeof TreeView>;

export const Example: Story = {
};

