import { Meta, StoryObj } from '@storybook/react';

import Header from '@/components/domain/Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Domain/Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta;

type Story = StoryObj<typeof Header>;

export const Example: Story = {

}