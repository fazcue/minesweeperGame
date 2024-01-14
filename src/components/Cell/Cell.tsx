import { MouseEvent } from 'react'
import { Cell } from '@/types/types'
import useStore from '@/store/store'
import { lostModal } from '@/utils/alerts'
import { revealNulls } from '@/utils/utils'
import styles from './Cell.module.css'

interface Props {
	cell: Cell
}

export default function Cell({ cell }: Props): JSX.Element {
	const { value, revealed, isMine, isPossibleMine, position } = cell
	const { row: i, column: j } = position

	const { board, setBoard, setMines, resetGame, mines } = useStore(
		(state) => state
	)

	const onClick = (): void => {
		const newBoard = [...board]

		// if it's marked as possible mine, don't do anything
		if (newBoard[i][j].isPossibleMine || newBoard[i][j].isMine) {
			return
		}

		// if it's a mine, game over
		if (newBoard[i][j].value === '*') {
			lostModal(resetGame)
			return
		}

		newBoard[i][j].revealed = true

		// it it's a zero, reveal all surrounding cells
		if (!newBoard[i][j].value) {
			revealNulls(newBoard, i, j)
		}

		setBoard(newBoard)
	}

	const toggleMine = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if (!board[i][j].revealed) {
			const newBoard = [...board]

			if (newBoard[i][j].isMine) {
				newBoard[i][j].isMine = !newBoard[i][j].isMine
				newBoard[i][j].isPossibleMine = !newBoard[i][j].isPossibleMine
			} else if (newBoard[i][j].isPossibleMine) {
				newBoard[i][j].isPossibleMine = !newBoard[i][j].isPossibleMine
				setMines({ ...mines, discovered: mines.discovered - 1 })
			} else {
				newBoard[i][j].isMine = !newBoard[i][j].isMine
				setMines({ ...mines, discovered: mines.discovered + 1 })
			}

			setBoard(newBoard)
		}
	}

	return (
		<button
			key={cell.id}
			className={`${styles.cell} ${value ? styles['num' + value] : ''} ${
				isMine ? styles.mine : ''
			} ${isPossibleMine ? styles.possibleMine : ''}`}
			onClick={onClick}
			onContextMenu={(e) => {
				toggleMine(e)
			}}
			disabled={revealed}
		>
			{revealed ? value : isMine || isPossibleMine ? '💣' : null}
		</button>
	)
}
