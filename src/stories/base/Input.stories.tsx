import { Meta, StoryObj } from '@storybook/react';

import Input from '@/components/base/Input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Base/Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta;

type Story = StoryObj<typeof Input>;

export const Example: Story = {
  args: { 
    type: 'text',
    placeholder: 'テキスト',
    disabled: false,
    borderless: false,
  }
};

export const InputWithValue: Story = {
  args: {
    placeholder: 'テキスト',
    value: 'テキスト入力',
    disabled: false,
  }
};

export const BorderlessInput: Story = {
  args: { placeholder: 'テキスト', borderless: true, }
};

export const DateInput: Story = {
  args: {
    type: 'date'
  }
};
