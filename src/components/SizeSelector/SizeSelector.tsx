import useStore from '@/store/store'
import { SIZES } from '@/config/config'
import styles from './SizeSelector.module.css'

export default function SizeSelector() {
	const { setBoardSize, boardSize } = useStore()

	const changeBoardSize = (rows: number, columns: number) => {
		setBoardSize({ rows, columns })
	}

	const Sizes = (): JSX.Element[] => {
		return SIZES.map(({ rows, columns }) => (
			<button
				key={`${rows}-${columns}`}
				onClick={() => changeBoardSize(rows, columns)}
				className={`${styles.sizeButton} ${
					boardSize.rows === rows && styles.selected
				}`}
			>
				{rows}x{columns}
			</button>
		))
	}

	return (
		<>
			<p>size</p>
			<div>
				<Sizes />
			</div>
		</>
	)
}
