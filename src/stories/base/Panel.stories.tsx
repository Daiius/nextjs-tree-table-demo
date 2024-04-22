import { Meta, StoryObj } from '@storybook/react';

import Panel from '@/components/base/Panel';
import Button from '@/components/base/Button';

const meta: Meta<typeof Panel> = {
  component: Panel,
  title: 'Base/Panel',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta;

type Story = StoryObj<typeof Panel>;

export const Example: Story = {
  args: {
    children:
      <div className='flex flex-col'>
        <p className='mb-2'>ちょっと長めのテキスト</p>
        <p className='mb-4'>テキスト</p>
        <Button
          className='self-end'
        >
          ボタン
        </Button>
      </div>
  }
}