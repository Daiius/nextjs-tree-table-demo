import { Meta, StoryObj } from '@storybook/react';

import LoginPanel from '@/components/case/LoginPanel';
import { fn } from '@storybook/test';

const meta: Meta<typeof LoginPanel> = {
  component: LoginPanel,
  title: 'Case/LoginPanel',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    setUsername: fn(),
    setPassword: fn(),
    autoComplete: false,
  }
}
export default meta;

type Story = StoryObj<typeof LoginPanel>;

export const Example: Story = {

};
