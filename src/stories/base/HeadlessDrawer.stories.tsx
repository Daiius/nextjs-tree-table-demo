import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import HeadlessDrawer from '@/components/base/HeadlessDrawer';
import { fn } from '@storybook/test';

const meta: Meta<typeof HeadlessDrawer> = {
  component: HeadlessDrawer,
  title: 'Base/HeadlessDrawer',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta;

type Story = StoryObj<typeof HeadlessDrawer>;

export const Example: Story = {
    
}
