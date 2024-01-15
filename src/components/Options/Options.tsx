import useStore from '@/store/store'
import styles from './Options.module.css'
import SizeSelector from '../SizeSelector/SizeSelector'
import DifficultySlider from '../DifficultySlider/DifficultySlider'
import EmptySpace from '../EmptySpace/EmptySpace'

export default function Options() {
	const { togglePlaying, generateNewBoard } = useStore((state) => state)

	const startGame = () => {
		generateNewBoard()
		togglePlaying()
	}

	return (
		<>
			<SizeSelector />
			<EmptySpace />
			<DifficultySlider />
			<button onClick={startGame} className={styles.playButton}>
				PLAY
			</button>
		</>
	)
}
