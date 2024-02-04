import { CellBox, BoardSize } from '@/types/types'
import { lostModal } from './alerts'
import useStore from '@/store/store'

function touchingCells(row: number, column: number): [number, number][] {
	return [
		[row - 1, column - 1],
		[row - 1, column],
		[row - 1, column + 1],
		[row, column - 1],
		[row, column + 1],
		[row + 1, column - 1],
		[row + 1, column],
		[row + 1, column + 1],
	]
}

function isValidPosition(
	board: CellBox[][],
	row: number,
	column: number
): boolean {
	return (
		row >= 0 &&
		row < board.length &&
		column >= 0 &&
		column < board[0].length
	)
}

function randomUniquePos(board: CellBox[][]): [number, number] {
	while (true) {
		let randomRow = Math.floor(Math.random() * board.length)
		let randomCol = Math.floor(Math.random() * board[0].length)

		if (board[randomRow][randomCol].value !== '*') {
			return [randomRow, randomCol]
		}
	}
}

function newEmptyBoard(rows: number, columns: number): CellBox[][] {
	const board: CellBox[][] = []

	for (let i = 0; i < rows; i++) {
		board[i] = []

		for (let j = 0; j < columns; j++) {
			board[i][j] = {
				id: `cell-${i}-${j}`,
				position: { row: i, column: j },
				value: null,
				revealed: false,
				isMine: false,
				isPossibleMine: false,
			}
		}
	}

	return board
}

function addRandomMines(board: CellBox[][], mines: number): void {
	for (let i = 0; i < mines; i++) {
		const [row, column] = randomUniquePos(board)
		board[row][column] = { ...board[row][column], value: '*' }
	}
}

function addNumbers(board: CellBox[][]) {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			const { value } = board[i][j]

			//if it is not a mine, count touching mines
			if (!value) {
				let count = 0

				const touching = touchingCells(i, j)

				for (let [k, l] of touching) {
					if (
						isValidPosition(board, k, l) &&
						board[k][l].value === '*'
					) {
						count++
					}
				}

				board[i][j] = {
					...board[i][j],
					value: count === 0 ? null : count,
				}
			}
		}
	}
}

function generateBoard(boardSize: BoardSize, mines: number): CellBox[][] {
	const { rows, columns } = boardSize

	const board: CellBox[][] = newEmptyBoard(rows, columns)

	addRandomMines(board, mines)
	addNumbers(board)

	return board
}

function getNulls(
	row: number,
	column: number,
	board?: CellBox[][],
	nulls?: CellBox[]
): CellBox[] {
	const currentNulls = nulls || []
	const currentBoard = board || useStore.getState().board

	const touching = touchingCells(row, column)

	for (const [i, j] of touching) {
		const isValid =
			isValidPosition(currentBoard, i, j) && !currentBoard[i][j].revealed

		if (isValid) {
			const currentCell = { ...currentBoard[i][j], revealed: true }

			// update cell to prevent infinite recursion
			currentBoard[i][j] = currentCell

			currentNulls.push(currentCell)

			if (!currentCell.value) {
				getNulls(i, j, currentBoard, currentNulls)
			}
		}
	}

	return currentNulls
}

function hasCellAllMinesMarked(
	board: CellBox[][],
	row: number,
	column: number,
	touching: [number, number][]
): boolean {
	let count = 0

	touching.forEach(([row, column]) => {
		if (
			isValidPosition(board, row, column) &&
			(board[row][column].isPossibleMine || board[row][column].isMine)
		) {
			count++
		}
	})

	return count === board[row][column].value
}

function revealNotMines(
	row: number,
	column: number,
	board?: CellBox[][],
	notMines?: CellBox[]
): CellBox[] {
	const cuurrentNotMines = notMines || []
	const currentBoard = board || useStore.getState().board
	const touching = touchingCells(row, column)

	// If cell does not have all mines marked, do nothing
	if (!hasCellAllMinesMarked(currentBoard, row, column, touching)) {
		return []
	}

	touching.every(([i, j]) => {
		if (isValidPosition(currentBoard, i, j)) {
			const currentCell = { ...currentBoard[i][j] }

			// if it's mark as a possible mine, don't reveal it
			if (currentCell.isMine || currentCell.isPossibleMine) {
				return true
			}

			// it it's a mine, game over
			if (currentCell.value === '*') {
				lostModal()
				return false
			}

			if (!currentCell.revealed) {
				currentCell.revealed = true

				// update cell to prevent infinite recursion
				currentBoard[i][j] = currentCell

				cuurrentNotMines.push(currentCell)

				// if it's null, reveal all surrounding cells
				if (!currentCell.value) {
					cuurrentNotMines.push(...getNulls(i, j, currentBoard))
				}

				revealNotMines(i, j, currentBoard, cuurrentNotMines)
			}

			return true
		}

		return true
	})

	return cuurrentNotMines
}

const hasWon = () => {
	const board = useStore.getState().board
	const mines = useStore.getState().mines

	const toReveal = board[0].length * board.length - mines.total
	const totalRevealed = board
		.flat()
		.reduce((acc, cell) => acc + (cell.revealed ? 1 : 0), 0)

	return totalRevealed === toReveal
}

const isLoupeable = (cell: CellBox): boolean => {
	const isLouping = useStore.getState().isLouping

	return isLouping && !cell.isMine && !cell.isPossibleMine
}

export { generateBoard, getNulls, revealNotMines, hasWon, isLoupeable }
