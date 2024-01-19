'use client'

import useStore from '@/store/store'
import Cell from '../Cell/Cell'
import Confetti from 'react-confetti'
import { wonModal } from '@/utils/alerts'
import styles from './Board.module.css'
import Helpers from '../Helpers/Helpers'

export default function Board(): JSX.Element {
	const { boardSize, mines, board, resetGame, changeSettings } = useStore(
		(state) => state
	)

	const hasWon = () => {
		const toReveal = boardSize.rows * boardSize.columns - mines.total // 15
		const totalRevealed = board
			.flat()
			.reduce((acc, cell) => acc + (cell.revealed ? 1 : 0), 0)

		return totalRevealed === toReveal
	}

	return (
		<>
			<p>Mines to discover: {mines.total - mines.discovered}</p>
			{board.map((row, i) => (
				<div key={i} className={styles.row}>
					{row.map((cell) => (
						<Cell cell={cell} key={cell.id} />
					))}
				</div>
			))}
			<Helpers />
			{hasWon() && (
				<>
					<Confetti />
					{wonModal({ resetGame, changeSettings })}
				</>
			)}
		</>
	)
}
