'use client'

import useStore from '@/store/store'
import Board from '@/components/Board/Board'
import Options from '@/components/Options/Options'

export default function Home() {
	const { playing } = useStore((state) => state)

	return (
		<div className="container" onContextMenu={(e) => e.preventDefault()}>
			<h1>MineSweeper</h1>
			{!playing ? <Options /> : <Board />}
		</div>
	)
}
