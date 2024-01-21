import type { Meta, StoryObj } from '@storybook/react'
import MineMarkerToggler from './MineMarkerToggler'

const meta: Meta<typeof MineMarkerToggler> = {
	component: MineMarkerToggler,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MineMarkerToggler>

export const Primary: Story = {
	args: {},
}
