import { MouseEvent } from 'react'
import useStore from '@/store/store'
import { lostModal, wonModal } from '@/utils/alerts'
import { getNulls, revealNotMines, hasWon, isLoupeable } from '@/utils/boards'
import styles from './Cell.module.css'
import classNames from 'classnames'

interface Props {
	row: number
	column: number
}

export default function Cell({ row, column }: Props): React.JSX.Element {
	/* Cell */
	const cell = useStore((state) => state.board[row][column])
	const updateCell = useStore((state) => state.updateCell)

	const { id, value, revealed, isMine, isPossibleMine } = cell

	/* Mines */
	const updateMines = useStore((state) => state.updateMines)

	/* Board */
	const updateBoard = useStore((state) => state.updateBoard)

	/* Options */
	const allowMineMarker = useStore((state) => state.allowMineMarker)
	const setWinner = useStore((state) => state.setWinner)

	/* Timer */
	const toggleTimer = useStore((state) => state.toggleTimer)

	// classes
	const cellClass = classNames(styles.cell, {
		[styles['num' + value]]: revealed && value,
		[styles.mine]: isMine,
		[styles.possibleMine]: isPossibleMine,
	})

	// functions
	const onClick = (): void => {
		if (!revealed) {
			const newCell = { ...cell }

			// if loupe is active, reveal without possible of loosing
			if (isLoupeable(newCell)) {
				if (value === '*') {
					newCell.isMine = true
					updateMines(1)
				} else {
					newCell.revealed = true
				}
			} else {
				// if it's marked as possible mine, don't do anything
				if (isPossibleMine || isMine) {
					return
				}

				// if it's a mine, game over
				if (value === '*') {
					lostModal()
					toggleTimer()
					return
				}

				// Reveal cell
				newCell.revealed = true

				// if it's null, reveal all surrounding cells
				if (!value) {
					const nulls = getNulls(row, column)
					updateBoard(nulls)
				}
			}

			updateCell(newCell)

			if (hasWon()) {
				wonModal()
				setWinner(true)
				toggleTimer()
			}
		}
	}

	// DONE
	const onContextMenu = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if (allowMineMarker && !revealed) {
			const newCell = { ...cell }

			if (isMine) {
				newCell.isMine = false
				newCell.isPossibleMine = true
			} else if (isPossibleMine) {
				newCell.isPossibleMine = false
				updateMines(-1)
			} else {
				newCell.isMine = true
				updateMines(1)
			}

			updateCell(newCell)
		}
	}

	// MISSING: timer
	const onDoubleClick = () => {
		if (allowMineMarker) {
			const updatedCells = revealNotMines(row, column)

			if (updatedCells.length > 0) {
				updateBoard(updatedCells)

				if (hasWon()) {
					wonModal()
					setWinner(true)
					toggleTimer()
				}
			}
		}
	}

	return (
		<button
			key={id}
			className={cellClass}
			onClick={onClick}
			onContextMenu={onContextMenu}
			onDoubleClick={onDoubleClick}
			disabled={revealed && !value}
			id={id}
		>
			{revealed ? value : isMine || isPossibleMine ? '💣' : null}
		</button>
	)
}
