import type { Meta, StoryObj } from '@storybook/react'
import SizeSelector from './SizeSelector'

const meta: Meta<typeof SizeSelector> = {
	component: SizeSelector,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SizeSelector>

export const Primary: Story = {
	args: {},
}
