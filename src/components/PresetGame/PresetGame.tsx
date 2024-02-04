'use client'

import { Game } from '@/types/types'
import useStore from '@/store/store'
import Confetti from 'react-confetti'
import Options from '@/components/Options/Options'
import { useEffect } from 'react'
import GameBoard from '../GameBoard/GameBoard'

interface Props {
	game: Game
}

export default function PresetGame({ game }: Props) {
	const {
		name,
		mines: INITIAL_MINES,
		allowMineMarker,
		boardWidth,
		boardHeight,
		description,
		allowLoupe,
	} = game

	const playing = useStore((state) => state.playing)
	const winner = useStore((state) => state.winner)

	useStore.setState({
		boardSize: { rows: boardHeight, columns: boardWidth },
		mines: { total: INITIAL_MINES, discovered: 0 },
		allowLoupe,
		allowMineMarker,
	})

	useEffect(() => {
		useStore.setState({
			playing: false,
		})
	}, [])

	return (
		<div>
			<div
				className="container"
				onContextMenu={(e) => e.preventDefault()}
			>
				{playing ? (
					<GameBoard />
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
