import { revalidatePath } from 'next/cache'
import PresetGame from '@/components/PresetGame/PresetGame'
import { getGamesSlugs, getGames } from '@/db/client'

interface Props {
	params: {
		slug: string
	}
}

export async function generateStaticParams() {
	return getGamesSlugs()
}

async function getGame(slug: string) {
	const games = await getGames()
	const game = games.find((game) => game.slug === slug) ?? null

	if (game) {
		revalidatePath('/')
	}

	return game
}

async function GamePage({ params }: Props) {
	const game = await getGame(params.slug)

	if (!game) {
		return <div>Game not found</div>
	}

	return <PresetGame game={game} />
}

export default GamePage
