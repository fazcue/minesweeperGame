import styles from './DifficultySlider.module.css'
import useStore from '@/store/store'

export default function DifficultySlider() {
	const { boardSize, setMines, mines } = useStore((state) => state)

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
			></input>
			<small>{mines.total} mines</small>
		</>
	)
}