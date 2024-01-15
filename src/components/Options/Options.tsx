import useStore from '@/store/store'
import styles from './Options.module.css'

export default function Options() {
	const { togglePlaying, generateNewBoard, setBoardSize, boardSize } =
		useStore((state) => state)

	const startGame = () => {
		generateNewBoard()
		togglePlaying()
	}

	const changeBoardSize = (rows: number, columns: number) => {
		setBoardSize({ rows, columns })
	}

	return (
		<>
			<h2>Select size</h2>
			<div>
				<button
					onClick={() => changeBoardSize(10, 10)}
					className={`${styles.sizeButton} ${
						boardSize.rows === 10 && styles.selected
					}`}
				>
					10x10
				</button>
				<button
					onClick={() => changeBoardSize(15, 15)}
					className={`${styles.sizeButton} ${
						boardSize.rows === 15 && styles.selected
					}`}
				>
					15x15
				</button>
				<button
					onClick={() => changeBoardSize(20, 20)}
					className={`${styles.sizeButton} ${
						boardSize.rows === 20 && styles.selected
					}`}
				>
					20x20
				</button>
			</div>

			<button onClick={startGame} className={styles.playButton}>
				PLAY
			</button>
		</>
	)
}
