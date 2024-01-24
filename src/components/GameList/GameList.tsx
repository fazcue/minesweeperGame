import { Fragment } from 'react'
import { getGames } from '@/db/client'
import Link from 'next/link'
import EmptySpace from '../EmptySpace/EmptySpace'

export default async function GameList() {
	const games = await getGames()

	if (games) {
		return (
			<>
				<h2>Game List</h2>
				<EmptySpace />
				{games.map((game) => (
					<Fragment key={game.id}>
						<Link href={`/${game.slug}`}>
							<h3>{game.name}</h3>
						</Link>
						<p>{game.description}</p>
						<p>{game.mines}</p>
					</Fragment>
				))}
			</>
		)
	}
}
