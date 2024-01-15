import useStore from '@/store/store'
import styles from './Options.module.css'
import SizeSelector from '../SizeSelector/SizeSelector'

export default function Options() {
	const { togglePlaying, generateNewBoard } = useStore((state) => state)

	const startGame = () => {
		generateNewBoard()
		togglePlaying()
	}

	return (
		<>
			<SizeSelector />
			<button onClick={startGame} className={styles.playButton}>
				PLAY
			</button>
		</>
	)
}
