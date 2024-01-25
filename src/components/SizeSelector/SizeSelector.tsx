import useStore from '@/store/store'
import { SIZES } from '@/config/config'
import styles from './SizeSelector.module.css'

interface Props {
	asInfoOnly?: boolean
}

export default function SizeSelector({ asInfoOnly }: Props): React.JSX.Element {
	const boardSize = useStore((state) => state.boardSize)
	const setBoardSize = useStore((state) => state.setBoardSize)

	const changeBoardSize = (rows: number, columns: number) => {
		setBoardSize({ rows, columns })
	}

	const Sizes = (): React.JSX.Element[] => {
		return SIZES.map(({ rows, columns }) => (
			<button
				key={`${rows}-${columns}`}
				onClick={() => changeBoardSize(rows, columns)}
				disabled={asInfoOnly}
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
