import useStore from '@/store/store'
import { sizes } from '@/config/config'
import styles from './SizeSelector.module.css'

export default function SizeSelector() {
	const { setBoardSize, boardSize } = useStore((state) => state)

	const changeBoardSize = (rows: number, columns: number) => {
		setBoardSize({ rows, columns })
	}

	const Sizes = (): JSX.Element[] => {
		return sizes.map(({ rows, columns }) => (
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
			<h2>Select size</h2>
			<div>
				<Sizes />
			</div>
		</>
	)
}
