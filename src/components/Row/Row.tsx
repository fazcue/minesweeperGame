import Cell from '@/components/Cell/Cell'
import useStore from '@/store/store'
import styles from './Row.module.css'

interface Props {
	row: number
}

function Row({ row }: Props): React.JSX.Element {
	const currentRow = useStore((state) => state.board[row])

	return (
		<div className={styles.row}>
			{currentRow.map(({ position, id }) => (
				<Cell row={position.row} column={position.column} key={id} />
			))}
		</div>
	)
}

export default Row
