import type { Meta, StoryObj } from '@storybook/react'
import Helpers from './Helpers'

const meta: Meta<typeof Helpers> = {
	component: Helpers,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Helpers>

export const Primary: Story = {
	args: {},
}
