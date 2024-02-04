'use client'

import useStore from '@/store/store'
import GameBoard from '../GameBoard/GameBoard'
import Options from '@/components/Options/Options'
import Confetti from 'react-confetti'
import { useEffect } from 'react'

export default function CustomGame() {
	const playing = useStore((state) => state.playing)
	const winner = useStore((state) => state.winner)

	useEffect(() => {
		useStore.setState({
			playing: false,
			asInfoOnly: false,
		})
	}, [])

	return (
		<div
			onContextMenu={(e) => e.preventDefault()}
			className="container"
			id="custom-game"
		>
			<h1>Custom MineSweeper</h1>
			{playing ? <GameBoard /> : <Options />}
			{winner && <Confetti />}
		</div>
	)
}
