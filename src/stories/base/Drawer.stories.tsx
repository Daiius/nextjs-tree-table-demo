import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Drawer from '@/components/base/Drawer';
import { fn } from '@storybook/test';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Base/Drawer',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    show: true,
    onShowChange: fn(),
    header: (
      <div className='p-1'>
        Drawer Header
      </div>
    ),
    children: (
      <div className='
        rounded-md 
        border border-1 border-slate-300
        bg-slate-300
        min-w-full
        '
      >
        テストコンテント
      </div>
    )
  }
}
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Example: Story = {
    
}
