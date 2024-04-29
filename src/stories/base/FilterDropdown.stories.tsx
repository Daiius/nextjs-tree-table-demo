import { Meta, StoryObj } from '@storybook/react';

import FilterDropdown from '@/components/base/FilterDropdown';

const meta: Meta<typeof FilterDropdown> = {
  component: FilterDropdown,
  title: 'Base/FilterDropdown',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta;

type Story = StoryObj<typeof FilterDropdown>;

export const Example: Story = {

}
