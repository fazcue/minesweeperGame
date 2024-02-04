'use client'

import useStore from '@/store/store'
import SizeSelector from '../SizeSelector/SizeSelector'
import DifficultySlider from '../DifficultySlider/DifficultySlider'
import EmptySpace from '../EmptySpace/EmptySpace'
import MineMarkerToggler from '../MineMarkerToggler/MineMarkerToggler'
import LoupeToggler from '../LoupeToggler/LoupeToggler'
import styles from './Options.module.css'
import { useEffect } from 'react'

interface Props {
	asInfoOnly?: boolean
}

export default function Options({
	asInfoOnly = false,
}: Props): React.JSX.Element {
	const togglePlaying = useStore((state) => state.togglePlaying)
	const toggleTimer = useStore((state) => state.toggleTimer)
	const resetSettings = useStore((state) => state.resetSettings)
	const generateNewBoard = useStore((state) => state.generateNewBoard)
	const setAsInfoOnly = useStore((state) => state.setAsInfoOnly)

	useEffect(() => {
		if (asInfoOnly) {
			setAsInfoOnly(asInfoOnly)
		}
	}, [asInfoOnly, setAsInfoOnly])

	const startGame = () => {
		resetSettings()
		generateNewBoard()
		togglePlaying()
		toggleTimer()
	}

	return (
		<div className={styles.options}>
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
		</div>
	)
}
