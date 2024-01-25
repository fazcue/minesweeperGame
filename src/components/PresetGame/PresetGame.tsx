'use client'

import { Game } from '@/types/types'
import useStore from '@/store/store'
import Board from '@/components/Board/Board'
import Confetti from 'react-confetti'
import Options from '@/components/Options/Options'

interface Props {
	game: Game
}

export default function PresetGame({ game }: Props) {
	const {
		id,
		name,
		mines: INITIAL_MINES,
		mineMarker,
		boardWidth,
		boardHeight,
		description,
		timer,
		loupe,
	} = game

	const playing = useStore((state) => state.playing)
	const winner = useStore((state) => state.winner)

	return (
		<div>
			<div
				className="container"
				onContextMenu={(e) => e.preventDefault()}
			>
				{playing ? (
					<>
						<Board />
					</>
				) : (
					<>
						<h1>{name}</h1>
						<p>{description}</p>
						<Options asInfoOnly />
					</>
				)}
				{winner && <Confetti />}
			</div>
		</div>
	)
}
