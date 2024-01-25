'use client'

import Options from '@/components/Options/Options'
import Board from '@/components/Board/Board'
import useStore from '@/store/store'
import Confetti from 'react-confetti'
import { useEffect } from 'react'

export default function CustomGame() {
	const playing = useStore((state) => state.playing)
	const winner = useStore((state) => state.winner)

	useEffect(() => {
		useStore.setState({
			playing: false,
		})
	}, [])

	return (
		<div
			onContextMenu={(e) => e.preventDefault()}
			className="container"
			id="custom-game"
		>
			<h1>Custom MineSweeper</h1>
			{playing ? <Board /> : <Options />}
			{winner && <Confetti />}
		</div>
	)
}
