import { getGames } from '@/db/client'
import EmptySpace from '../EmptySpace/EmptySpace'
import GameCard from './GameCard'

export default async function GameList() {
	const games = await getGames()

	if (games) {
		return (
			<>
				<h2>Game List</h2>
				<EmptySpace />
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</>
		)
	}
}
