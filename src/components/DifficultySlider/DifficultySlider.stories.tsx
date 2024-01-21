import type { Meta, StoryObj } from '@storybook/react'
import DifficultySlider from './DifficultySlider'

const meta: Meta<typeof DifficultySlider> = {
	component: DifficultySlider,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DifficultySlider>

export const Primary: Story = {
	args: {},
}
