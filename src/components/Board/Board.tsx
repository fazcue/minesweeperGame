'use client'

import useStore from '@/store/store'
import Cell from '../Cell/Cell'
import Helpers from '../Helpers/Helpers'
import Timer from '../Timer/Timer'
import styles from './Board.module.css'

export default function Board(): React.JSX.Element {
	const mines = useStore((state) => state.mines)
	const board = useStore((state) => state.board)

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
		</>
	)
}
