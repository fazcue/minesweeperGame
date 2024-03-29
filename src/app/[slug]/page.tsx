import PresetGame from '@/components/PresetGame/PresetGame'
import { getGamesSlugs, getGames } from '@/db/client'
import { notFound } from 'next/navigation'

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

	return game
}

async function GamePage({ params }: Props) {
	const game = await getGame(params.slug)

	if (!game) notFound()

	return <PresetGame game={game} />
}

export default GamePage
