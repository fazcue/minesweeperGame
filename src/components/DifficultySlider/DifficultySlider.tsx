import useStore from '@/store/store'
import styles from './DifficultySlider.module.css'

interface Props {
	asInfoOnly?: boolean
}

export default function DifficultySlider({
	asInfoOnly = false,
}: Props): React.JSX.Element {
	const boardSize = useStore((state) => state.boardSize)
	const setMines = useStore((state) => state.setMines)
	const mines = useStore((state) => state.mines)

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
