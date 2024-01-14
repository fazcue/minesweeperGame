'use client'

import useStore from '@/store/store'
import Board from '@/components/Board/Board'

export default function Home() {
	const { playing, togglePlaying, generateNewBoard } = useStore(
		(state) => state
	)

	const startGame = () => {
		generateNewBoard()
		togglePlaying()
	}

	return (
		<div className="container" onContextMenu={(e) => e.preventDefault()}>
			<h1>MineSweeper</h1>

			{!playing ? (
				<>
					<button onClick={startGame}>Play</button>
				</>
			) : (
				<Board />
			)}
		</div>
	)
}
