import useStore from '@/store/store'
import { SIZES } from '@/config/config'
import styles from './SizeSelector.module.css'
import classNames from 'classnames'

export default function SizeSelector(): React.JSX.Element {
	const boardSize = useStore((state) => state.boardSize)
	const setBoardSize = useStore((state) => state.setBoardSize)
	const asInfoOnly = useStore((state) => state.asInfoOnly)

	const changeBoardSize = (rows: number, columns: number) => {
		setBoardSize({ rows, columns })
	}

	const Sizes = (): React.JSX.Element[] => {
		return SIZES.map(({ rows, columns }) => {
			const btnClass = classNames(styles.sizeButton, {
				[styles.selected]: boardSize.rows === rows,
			})

			return (
				<button
					key={`${rows}-${columns}`}
					onClick={() => changeBoardSize(rows, columns)}
					disabled={asInfoOnly}
					className={btnClass}
				>
					{rows}x{columns}
				</button>
			)
		})
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
