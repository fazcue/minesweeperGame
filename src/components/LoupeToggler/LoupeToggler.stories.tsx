import type { Meta, StoryObj } from '@storybook/react'
import LoupeToggler from './LoupeToggler'

const meta: Meta<typeof LoupeToggler> = {
	component: LoupeToggler,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LoupeToggler>

export const Primary: Story = {
	args: {},
}
