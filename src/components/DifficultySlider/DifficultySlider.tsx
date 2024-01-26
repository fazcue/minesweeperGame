import useStore from '@/store/store'
import styles from './DifficultySlider.module.css'

export default function DifficultySlider(): React.JSX.Element {
	const boardSize = useStore((state) => state.boardSize)
	const setMines = useStore((state) => state.setMines)
	const mines = useStore((state) => state.mines)
	const asInfoOnly = useStore((state) => state.asInfoOnly)

	const changeSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMines({ ...mines, total: +e.target.value })
	}

	return (
		<>
			<p>difficulty</p>
			<input
				type="range"
				min="1"
				max={boardSize.rows * boardSize.columns - 1}
				value={mines.total}
				className={styles.slider}
				step="1"
				onChange={changeSlider}
				disabled={asInfoOnly}
			></input>
			<small>{mines.total} mines</small>
		</>
	)
}
