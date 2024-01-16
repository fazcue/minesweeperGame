import { Cell, BoardSize } from '@/types/types'

function generateBoard(boardSize: BoardSize, mines: number) {
	const { rows, columns } = boardSize

	// create empty board
	let board: Cell[][] = newEmptyBoard(rows, columns)

	// add random mines
	addRandomMines(board, mines)

	// add numbers
	addNumbers(board, rows, columns)

	return board
}

function revealNulls(board: Cell[][], i: number, j: number) {
	for (let x = i - 1; x <= i + 1; x++) {
		for (let y = j - 1; y <= j + 1; y++) {
			if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) {
				if (!board[x][y].revealed) {
					board[x][y].revealed = true
					if (board[x][y].value === null) {
						revealNulls(board, x, y)
					}
				}
			}
		}
	}
}

function randomUniquePos(board: Cell[][]) {
	while (true) {
		let randomRow = Math.floor(Math.random() * board.length)
		let randomCol = Math.floor(Math.random() * board[0].length)

		if (board[randomRow][randomCol].value !== '*')
			return [randomRow, randomCol]
	}
}

function newEmptyBoard(rows: number, columns: number) {
	const board: Cell[][] = []

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

function addRandomMines(board: Cell[][], mines: number) {
	for (let i = 0; i < mines; i++) {
		const [row, column] = randomUniquePos(board)
		board[row][column] = { ...board[row][column], value: '*' }
	}
}

function addNumbers(board: Cell[][], rows: number, columns: number) {
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			//if it is not a mine, count touching mines
			if (!board[i][j].value) {
				let count = 0

				const touching = [
					[i - 1, j - 1],
					[i - 1, j],
					[i - 1, j + 1],
					[i, j - 1],
					[i, j + 1],
					[i + 1, j - 1],
					[i + 1, j],
					[i + 1, j + 1],
				]

				for (let [k, l] of touching) {
					if (
						k >= 0 &&
						l >= 0 &&
						k < board.length &&
						l < board[0].length
					) {
						if (board[k][l].value === '*') {
							count++
						}
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

export { generateBoard, revealNulls }
