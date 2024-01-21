import { MouseEvent } from 'react'
import { CellBox } from '@/types/types'
import useStore from '@/store/store'
import { lostModal, wonModal } from '@/utils/alerts'
import { revealNulls, revealNotMines } from '@/utils/boards'
import styles from './Cell.module.css'

interface Props {
	cell: CellBox
}

export default function Cell({ cell }: Props): JSX.Element {
	const { id, value, revealed, isMine, isPossibleMine, position } = cell
	const { row, column } = position

	const {
		board,
		boardSize,
		setBoard,
		setMines,
		resetGame,
		resetSettings,
		mines,
		loupe,
		allowMineMarker,
		timer,
		toggleTimer,
		resetTimer,
		setWinner,
	} = useStore()

	const reset = () => {
		resetGame()
		resetTimer()
		setWinner(false)
	}

	const changeSettings = () => {
		resetSettings()
		resetTimer()
		setWinner(false)
	}

	const hasWon = (board: CellBox[][]) => {
		const toReveal = boardSize.rows * boardSize.columns - mines.total
		const totalRevealed = board
			.flat()
			.reduce((acc, cell) => acc + (cell.revealed ? 1 : 0), 0)

		return totalRevealed === toReveal
	}

	const onClick = (): void => {
		if (!timer) {
			toggleTimer()
		}

		if (!revealed) {
			// if loupe is active, reveal without possible of loosing
			if (loupe && !isMine && !isPossibleMine) {
				const newBoard = [...board]

				if (value === '*') {
					cell.isMine = true
					setMines({ ...mines, discovered: mines.discovered + 1 })
				} else {
					cell.revealed = true
				}

				newBoard[row][column].revealed = cell.revealed

				setBoard(newBoard)

				if (hasWon(newBoard)) {
					wonModal({ reset, changeSettings })
					toggleTimer()
					setWinner(true)
				}

				return
			}

			// if it's marked as possible mine, don't do anything
			if (isPossibleMine || isMine) {
				return
			}

			// if it's a mine, game over
			if (value === '*') {
				lostModal({ reset, changeSettings })
				toggleTimer()
				return
			}

			const newBoard = [...board]

			cell.revealed = true
			newBoard[row][column].revealed = cell.revealed

			// it it's null, reveal all surrounding cells
			if (!value) {
				revealNulls(newBoard, row, column, mines, setMines)
			}

			setBoard(newBoard)

			if (hasWon(newBoard)) {
				wonModal({ reset, changeSettings })
				toggleTimer()
				setWinner(true)
			}
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

			revealNotMines(
				board,
				cell,
				resetGame,
				changeSettings,
				mines,
				setMines
			)
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
