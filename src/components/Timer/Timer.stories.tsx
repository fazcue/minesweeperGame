import type { Meta, StoryObj } from '@storybook/react'
import Timer from './Timer'

const meta: Meta<typeof Timer> = {
	component: Timer,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Timer>

export const Primary: Story = {
	args: {},
}
