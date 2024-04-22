import { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/base/Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Base/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta;

type Story = StoryObj<typeof Button>;

export const Example: Story = {
  args: {
    children: 'ボタン',
    disabled: false,
  }
};

export const LargeButton: Story = {
  args: {
    children: 'Button',
    size: 'lg',
    disabled: false,
  }
}

export const SmallButton: Story = {
  args: {
    children: 'Button',
    size: 'sm',
  }
}

export const DisabledButton: Story = {
  args: {
    children: 'Button', disabled: true,
  }
}