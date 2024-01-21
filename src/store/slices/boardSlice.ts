import { StateCreator } from 'zustand'
import { BoardSize, Cell, Mines } from '@/types/types'
import { INITIAL_MINES } from '@/config/config'
import { generateBoard } from '@/utils/boards'

export interface BoardSlice {
	boardSize: BoardSize
	setBoardSize: (boardSize: BoardSize) => void
	board: Cell[][]
	setBoard: (board: Cell[][]) => void
	mines: Mines
	setMines: (mines: Mines) => void
	generateNewBoard: () => void
}

export const boardSlice: StateCreator<BoardSlice> = (set, get) => ({
	boardSize: { rows: 15, columns: 15 },
	setBoardSize: (boardSize) => {
		set({ boardSize, mines: { ...get().mines, total: INITIAL_MINES } })
	},
	board: [],
	setBoard: (board) => set({ board }),
	mines: { total: INITIAL_MINES, discovered: 0 },
	setMines: (mines) => set({ mines }),
	generateNewBoard: () => {
		set({ board: generateBoard(get().boardSize, get().mines.total) })
	},
})
