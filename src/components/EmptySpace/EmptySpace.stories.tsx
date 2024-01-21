import type { Meta, StoryObj } from '@storybook/react'
import EmptySpace from './EmptySpace'

const meta: Meta<typeof EmptySpace> = {
	component: EmptySpace,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EmptySpace>

export const Primary: Story = {
	args: {},
}
