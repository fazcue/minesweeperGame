import { create } from 'zustand'
import { BoardSize, Mines, Cell } from '@/types/types'
import { generateBoard } from '@/utils/utils'

interface IStore {
	playing: boolean
	boardSize: BoardSize
	mines: Mines
	board: Cell[][]
	togglePlaying: () => void
	setMines: (mines: Mines) => void
	setBoard: (board: Cell[][]) => void
	generateNewBoard: () => void
	resetGame: () => void
}

const useStore = create<IStore>((set, get) => ({
	playing: false,
	boardSize: { rows: 10, columns: 10 },
	mines: { total: 10, discovered: 0 },
	board: [],
	setMines: (mines) => set({ mines }),
	setBoard: (board) => set({ board }),
	generateNewBoard: () =>
		set({ board: generateBoard(get().boardSize, get().mines.total) }),
	togglePlaying: () => set({ playing: !get().playing }),
	resetGame: () => {
		get().generateNewBoard()
		set({ playing: true, mines: { total: 10, discovered: 0 } })
		set({ mines: { ...get().mines, discovered: 0 } })
	},
}))

export default useStore
