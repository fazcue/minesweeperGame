import { Cell, BoardSize, Icons } from '@/types/types'

function randomUniquePos(board: Cell[][]) {
	while (true) {
		let randomRow = Math.floor(Math.random() * board.length)
		let randomCol = Math.floor(Math.random() * board[0].length)

		if (board[randomRow][randomCol].value !== '*')
			return [randomRow, randomCol]
	}
}

export function generateBoard(boardSize: BoardSize, mines: number) {
	const { rows, columns } = boardSize

	let board: Cell[][] = []

	// create an empty array
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

	// add mines
	for (let i = 0; i < mines; i++) {
		const pos = randomUniquePos(board)
		board[pos[0]][pos[1]] = { ...board[pos[0]][pos[1]], value: '*' }
	}

	// add numbers
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			//if it is not a mine, count touching mines
			if (!board[i][j].value) {
				let count = 0

				const arrRounded = [
					[i - 1, j - 1],
					[i - 1, j],
					[i - 1, j + 1],
					[i, j - 1],
					[i, j + 1],
					[i + 1, j - 1],
					[i + 1, j],
					[i + 1, j + 1],
				]

				for (let [k, l] of arrRounded) {
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

	return board
}

export function revealNulls(board: Cell[][], i: number, j: number) {
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

export function randomIcons(icons: Icons[]) {
	return icons[Math.floor(Math.random() * icons.length)]
}
