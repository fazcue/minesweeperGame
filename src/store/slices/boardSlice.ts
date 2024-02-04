import { StateCreator } from 'zustand'
import { BoardSize, CellBox, Mines } from '@/types/types'
import { INITIAL_MINES } from '@/config/config'
import { generateBoard } from '@/utils/boards'

export interface BoardSlice {
	boardSize: BoardSize
	setBoardSize: (boardSize: BoardSize) => void

	board: CellBox[][]
	setBoard: (board: CellBox[][]) => void
	updateBoard: (updatedCells: CellBox[]) => void
	updateCell: (cell: CellBox) => void

	mines: Mines
	setMines: (mines: Mines) => void
	updateMines: (mines: number) => void

	generateNewBoard: () => void
}

export const boardSlice: StateCreator<BoardSlice> = (set, get) => ({
	boardSize: { rows: 15, columns: 15 },
	setBoardSize: (boardSize) => {
		set({ boardSize, mines: { ...get().mines, total: INITIAL_MINES } })
	},

	board: [],
	setBoard: (board) => set({ board }),
	updateBoard: (updatedCells) => {
		const newBoard = get().board
		let minesMissplaced = 0

		updatedCells.forEach((cell) => {
			if (cell.isMine || cell.isPossibleMine) {
				cell.isMine = false
				cell.isPossibleMine = false

				minesMissplaced++
			}

			newBoard[cell.position.row][cell.position.column] = cell
		})

		set({ board: newBoard })

		if (minesMissplaced > 0) {
			get().updateMines(-minesMissplaced)
		}
	},
	updateCell: (cell) => {
		const newBoard = get().board
		newBoard[cell.position.row][cell.position.column] = cell
		set({ board: newBoard })
	},

	mines: { total: INITIAL_MINES, discovered: 0 },
	setMines: (mines) => set({ mines }),
	updateMines: (count) => {
		const newMines = { ...get().mines }
		newMines.discovered += count
		set({ mines: newMines })
	},

	generateNewBoard: () => {
		set({ board: generateBoard(get().boardSize, get().mines.total) })
	},
})
