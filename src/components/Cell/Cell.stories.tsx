import type { Meta, StoryObj } from '@storybook/react'
import Cell from './Cell'

const meta: Meta<typeof Cell> = {
	component: Cell,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Cell>

export const NotRevealed: Story = {
	args: {
		cell: {
			id: 'cell-0-0',
			position: { row: 0, column: 0 },
			value: 0,
			revealed: false,
			isMine: false,
			isPossibleMine: false,
		},
	},
}

export const Null: Story = {
	args: {
		cell: {
			id: 'cell-0-0',
			position: { row: 0, column: 0 },
			value: 0,
			revealed: true,
			isMine: false,
			isPossibleMine: false,
		},
	},
}

export const Mine: Story = {
	args: {
		cell: {
			id: 'cell-0-0',
			position: { row: 0, column: 0 },
			value: '*',
			revealed: false,
			isMine: true,
			isPossibleMine: false,
		},
	},
}

export const PossibleMine: Story = {
	args: {
		cell: {
			id: 'cell-0-0',
			position: { row: 0, column: 0 },
			value: '*',
			revealed: false,
			isMine: false,
			isPossibleMine: true,
		},
	},
}

export const Number1: Story = {
	args: {
		cell: {
			id: 'cell-0-0',
			position: { row: 0, column: 0 },
			value: 1,
			revealed: true,
			isMine: false,
			isPossibleMine: false,
		},
	},
}

export const Number2: Story = {
	args: {
		cell: {
			id: 'cell-0-0',
			position: { row: 0, column: 0 },
			value: 2,
			revealed: true,
			isMine: false,
			isPossibleMine: false,
		},
	},
}

export const Number3: Story = {
	args: {
		cell: {
			id: 'cell-0-0',
			position: { row: 0, column: 0 },
			value: 3,
			revealed: true,
			isMine: false,
			isPossibleMine: false,
		},
	},
}

export const Number4: Story = {
	args: {
		cell: {
			id: 'cell-0-0',
			position: { row: 0, column: 0 },
			value: 4,
			revealed: true,
			isMine: false,
			isPossibleMine: false,
		},
	},
}

export const Number5: Story = {
	args: {
		cell: {
			id: 'cell-0-0',
			position: { row: 0, column: 0 },
			value: 5,
			revealed: true,
			isMine: false,
			isPossibleMine: false,
		},
	},
}

export const Number6: Story = {
	args: {
		cell: {
			id: 'cell-0-0',
			position: { row: 0, column: 0 },
			value: 6,
			revealed: true,
			isMine: false,
			isPossibleMine: false,
		},
	},
}

export const Number7: Story = {
	args: {
		cell: {
			id: 'cell-0-0',
			position: { row: 0, column: 0 },
			value: 7,
			revealed: true,
			isMine: false,
			isPossibleMine: false,
		},
	},
}

export const Number8: Story = {
	args: {
		cell: {
			id: 'cell-0-0',
			position: { row: 0, column: 0 },
			value: 8,
			revealed: true,
			isMine: false,
			isPossibleMine: false,
		},
	},
}
