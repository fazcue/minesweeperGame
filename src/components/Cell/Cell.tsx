import { MouseEvent } from 'react'
import { Cell } from '@/types/types'
import useStore from '@/store/store'
import useOptions from '@/store/options'
import { lostModal } from '@/utils/alerts'
import { revealNulls, revealNotMines } from '@/utils/boards'
import styles from './Cell.module.css'

interface Props {
	cell: Cell
}

export default function Cell({ cell }: Props): JSX.Element {
	const { id, value, revealed, isMine, isPossibleMine, position } = cell
	const { row, column } = position

	const { board, setBoard, setMines, resetGame, togglePlaying, mines } =
		useStore()
	const { allowMineMarker } = useOptions()

	const onClick = (): void => {
		if (!revealed) {
			// if it's marked as possible mine, don't do anything
			if (isPossibleMine || isMine) {
				return
			}

			// if it's a mine, game over
			if (value === '*') {
				lostModal({ resetGame, togglePlaying })
				return
			}

			const newBoard = [...board]

			cell.revealed = true
			newBoard[row][column].revealed = cell.revealed

			// it it's null, reveal all surrounding cells
			if (!value) {
				revealNulls(newBoard, row, column)
			}

			setBoard(newBoard)
		}
	}

	const onContextMenu = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if (allowMineMarker && !revealed) {
			if (isMine) {
				cell.isMine = false
				cell.isPossibleMine = true
			} else if (isPossibleMine) {
				cell.isPossibleMine = false
				setMines({ ...mines, discovered: mines.discovered - 1 })
			} else {
				cell.isMine = true
				setMines({ ...mines, discovered: mines.discovered + 1 })
			}

			const newBoard = [...board]
			newBoard[row][column] = cell

			setBoard(newBoard)
		}
	}

	const onDoubleClick = () => {
		if (allowMineMarker) {
			const newBoard = [...board]

			revealNotMines(board, cell, resetGame, togglePlaying)
			setBoard(newBoard)
		}
	}

	return (
		<button
			key={id}
			className={`${styles.cell} ${
				revealed && value ? styles['num' + value] : ''
			} ${isMine ? styles.mine : ''} ${
				isPossibleMine ? styles.possibleMine : ''
			}`}
			onClick={onClick}
			onContextMenu={onContextMenu}
			onDoubleClick={onDoubleClick}
			disabled={revealed && !value}
			id={cell.id}
		>
			{revealed ? value : isMine || isPossibleMine ? '💣' : null}
		</button>
	)
}
