import { create } from 'zustand'
import { BoardSize, Mines, Cell } from '@/types/types'
import { generateBoard } from '@/utils/boards'
import { INITIAL_MINES } from '@/config/config'

interface IStore {
	playing: boolean
	boardSize: BoardSize
	mines: Mines
	board: Cell[][]
	togglePlaying: () => void
	setBoardSize: (boardSize: BoardSize) => void
	setMines: (mines: Mines) => void
	setBoard: (board: Cell[][]) => void
	generateNewBoard: () => void
	resetGame: () => void
	loupe: boolean
	setLoupe: (loupe: boolean) => void
}

const useStore = create<IStore>((set, get) => ({
	playing: false,
	boardSize: { rows: 15, columns: 15 },
	mines: { total: INITIAL_MINES, discovered: 0 },
	board: [],
	setBoardSize: (boardSize) =>
		set({ boardSize, mines: { ...get().mines, total: INITIAL_MINES } }),
	setMines: (mines) => set({ mines }),
	setBoard: (board) => set({ board }),
	generateNewBoard: () =>
		set({ board: generateBoard(get().boardSize, get().mines.total) }),
	togglePlaying: () => set({ playing: !get().playing }),
	resetGame: () => {
		get().generateNewBoard()
		set({ playing: true, mines: { ...get().mines, discovered: 0 } })
		set({ mines: { ...get().mines, discovered: 0 } })
		set({ loupe: false })
	},
	loupe: false,
	setLoupe: (loupe) => set({ loupe }),
}))

export default useStore
