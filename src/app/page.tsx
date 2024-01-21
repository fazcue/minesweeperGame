'use client'

import useStore from '@/store/store'
import Board from '@/components/Board/Board'
import Options from '@/components/Options/Options'
import React from 'react'

export default function Home(): React.JSX.Element {
	const playing = useStore((state) => state.playing)

	return (
		<div className="container" onContextMenu={(e) => e.preventDefault()}>
			<h1>MineSweeper</h1>
			{!playing ? <Options /> : <Board />}
		</div>
	)
}
