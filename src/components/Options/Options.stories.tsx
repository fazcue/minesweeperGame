import type { Meta, StoryObj } from '@storybook/react'
import Options from './Options'

const meta: Meta<typeof Options> = {
	component: Options,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Options>

export const Primary: Story = {
	args: {},
}
