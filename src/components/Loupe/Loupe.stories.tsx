import type { Meta, StoryObj } from '@storybook/react'
import Loupe from './Loupe'

const meta: Meta<typeof Loupe> = {
	component: Loupe,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Loupe>

export const Primary: Story = {
	args: {},
}
