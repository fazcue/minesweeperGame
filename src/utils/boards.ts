import { CellBox, BoardSize, Mines } from '@/types/types'
import { lostModal } from './alerts'

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

function revealNulls(
	board: CellBox[][],
	row: number,
	column: number,
	mines: Mines,
	setMines: (mines: Mines) => void
): void {
	const touching = touchingCells(row, column)

	for (let [i, j] of touching) {
		if (isValidPosition(board, i, j) && !board[i][j].revealed) {
			board[i][j].revealed = true

			if (board[i][j].isMine || board[i][j].isPossibleMine) {
				board[i][j].isMine = false
				board[i][j].isPossibleMine = false

				mines = { ...mines, discovered: mines.discovered - 1 }
				setMines({ ...mines })
			}

			if (!board[i][j].value) {
				revealNulls(board, i, j, mines, setMines)
			}
		}
	}
}

function revealNotMines(
	board: CellBox[][],
	cell: CellBox,
	reset: () => void,
	changeSettings: () => void,
	mines: Mines,
	setMines: (mines: Mines) => void
) {
	const { value, position } = cell
	const { row, column } = position

	// count touching cells marked as possible mine
	let count = 0

	const touching = touchingCells(row, column)

	touching.forEach(([row, column]) => {
		if (
			isValidPosition(board, row, column) &&
			(board[row][column].isPossibleMine || board[row][column].isMine)
		) {
			count++
		}
	})

	// if it's not the right number, don't reveal
	if (count !== value) {
		return
	}

	touching.every(([row, column]) => {
		if (isValidPosition(board, row, column)) {
			const { isMine, isPossibleMine, value, revealed } =
				board[row][column]

			// if it's mark as a possible mine, don't reveal it
			if (isMine || isPossibleMine) {
				return true
			}

			// it it's a mine, game over
			if (value === '*') {
				lostModal({ reset, changeSettings })
				return false
			}

			if (!revealed) {
				board[row][column].revealed = true

				// it it's null, reveal all surrounding cells
				if (!value) {
					revealNulls(board, row, column, mines, setMines)
				}

				revealNotMines(
					board,
					board[row][column],
					reset,
					changeSettings,
					mines,
					setMines
				)
				return true
			}

			return true
		}

		return true
	})
}

export { generateBoard, revealNulls, revealNotMines }
