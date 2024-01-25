'use client'

import useStore from '@/store/store'
import SizeSelector from '../SizeSelector/SizeSelector'
import DifficultySlider from '../DifficultySlider/DifficultySlider'
import EmptySpace from '../EmptySpace/EmptySpace'
import MineMarkerToggler from '../MineMarkerToggler/MineMarkerToggler'
import LoupeToggler from '../LoupeToggler/LoupeToggler'
import styles from './Options.module.css'

interface Props {
	asInfoOnly?: boolean
}

export default function Options({
	asInfoOnly = false,
}: Props): React.JSX.Element {
	const togglePlaying = useStore((state) => state.togglePlaying)
	const generateNewBoard = useStore((state) => state.generateNewBoard)

	const startGame = () => {
		generateNewBoard()
		togglePlaying()
	}

	return (
		<div className={styles.options}>
			<SizeSelector asInfoOnly={asInfoOnly} />
			<EmptySpace />
			<DifficultySlider asInfoOnly={asInfoOnly} />
			<EmptySpace />
			<MineMarkerToggler asInfoOnly={asInfoOnly} />
			<EmptySpace />
			<LoupeToggler asInfoOnly={asInfoOnly} />
			<EmptySpace />
			<button onClick={startGame} className={styles.playButton}>
				PLAY
			</button>
		</div>
	)
}
