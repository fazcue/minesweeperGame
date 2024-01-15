import { BoardSize } from '@/types/types'

const INITIAL_MINES = 30

const SIZES: BoardSize[] = [
	{ rows: 10, columns: 10 },
	{ rows: 15, columns: 15 },
	{ rows: 20, columns: 20 },
]

export { INITIAL_MINES, SIZES }
