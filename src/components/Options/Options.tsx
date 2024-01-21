import useStore from '@/store/store'
import styles from './Options.module.css'
import SizeSelector from '../SizeSelector/SizeSelector'
import DifficultySlider from '../DifficultySlider/DifficultySlider'
import EmptySpace from '../EmptySpace/EmptySpace'
import MineMarkerToggler from '../MineMarkerToggler/MineMarkerToggler'
import LoupeToggler from '../LoupeToggler/LoupeToggler'

export default function Options() {
	const { togglePlaying, generateNewBoard } = useStore()

	const startGame = () => {
		generateNewBoard()
		togglePlaying()
	}

	return (
		<>
			<SizeSelector />
			<EmptySpace />
			<DifficultySlider />
			<EmptySpace />
			<MineMarkerToggler />
			<EmptySpace />
			<LoupeToggler />
			<EmptySpace />
			<button onClick={startGame} className={styles.playButton}>
				PLAY
			</button>
		</>
	)
}
