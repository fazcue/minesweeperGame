'use client'

import Options from '@/components/Options/Options'
import Board from '@/components/Board/Board'
import useStore from '@/store/store'
import Confetti from 'react-confetti'

export default function CustomGame() {
	const playing = useStore((state) => state.playing)
	const winner = useStore((state) => state.winner)

	return (
		<div onContextMenu={(e) => e.preventDefault()}>
			{playing ? (
				<>
					<Board />
				</>
			) : (
				<>
					<Options />
				</>
			)}
			{winner && <Confetti />}
		</div>
	)
}