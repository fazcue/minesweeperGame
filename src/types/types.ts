export type Cell = {
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
