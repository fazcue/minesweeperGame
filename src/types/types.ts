export type CellBox = {
	id: string
	position: { row: number; column: number }
	value: number | '*' | null
	revealed: boolean
	isMine: boolean
	isPossibleMine: boolean
}

export type BoardSize = {
	rows: number
	columns: number
}

export type Mines = {
	total: number
	discovered: number
}

export type Icons = {
	icon: string
	message: string
}

export type Game = {
	id: number
	name: string
	mines: number
	mineMarker: boolean
	loupe: boolean
	boardWidth: number
	boardHeight: number
	description: string
	timer: boolean
	slug: string
}
