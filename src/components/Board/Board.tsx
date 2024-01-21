'use client'

import useStore from '@/store/store'
import Cell from '../Cell/Cell'
import Confetti from 'react-confetti'
import styles from './Board.module.css'
import Helpers from '../Helpers/Helpers'
import Timer from '../Timer/Timer'

export default function Board(): React.JSX.Element {
	const mines = useStore((state) => state.mines)
	const board = useStore((state) => state.board)
	const winner = useStore((state) => state.winner)

	return (
		<>
			<p>Mines to discover: {mines.total - mines.discovered}</p>
			<Timer />
			{board.map((row, i) => (
				<div key={i} className={styles.row}>
					{row.map((cell) => (
						<Cell cell={cell} key={cell.id} />
					))}
				</div>
			))}
			<Helpers />
			{winner && <Confetti />}
		</>
	)
}
