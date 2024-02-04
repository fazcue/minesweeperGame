import useStore from '@/store/store'
import styles from './Board.module.css'
import Row from '../Row/Row'

export default function Board(): React.JSX.Element {
	const board = useStore((state) => state.board)

	return (
		<div className={styles.board}>
			{board.map((row, i) => (
				<Row key={`row-${i}`} row={i} />
			))}
		</div>
	)
}
