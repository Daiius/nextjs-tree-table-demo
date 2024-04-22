import { Meta, StoryObj } from '@storybook/react';

import StyledButton from '@/components/StyledButton';

const meta: Meta<typeof StyledButton> = {
  component: StyledButton,
  parameters: {
    layout: 'centered'
  }
}
export default meta;

type Story = StoryObj<typeof StyledButton>;

export const Example: Story = {
  args: {
    children: "ボタン"
  }
};
