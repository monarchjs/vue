import type { Meta, StoryObj } from '@storybook/vue3'

import MButton from './MButton.vue'

const meta = {
  title: 'Base/MButton',
  component: MButton,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
} satisfies Meta<typeof MButton>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    text: 'Test',
    variant: 'solid',
  },
}
