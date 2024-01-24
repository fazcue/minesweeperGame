import { type Row } from '@libsql/client'
import { Game } from '@/types/types'

type Slugs = {
	slug: string
}

export const parseSlugs = (result: Row[]): Slugs[] => {
	const slugs: Slugs[] = []

	result.forEach((row) => {
		slugs.push({
			slug: typeof row.slug === 'string' ? row.slug : '',
		})
	})

	return slugs
}

export const parseGames = (result: Row[]): Game[] => {
	const games: Game[] = []

	result.forEach((row) => {
		games.push({
			id: typeof row.id === 'number' ? row.id : 0,
			name: typeof row.name === 'string' ? row.name : '',
			mines: typeof row.mines === 'number' ? row.mines : 0,
			mineMarker:
				typeof row.mineMarker === 'boolean' ? row.mineMarker : false,
			loupe: typeof row.loupe === 'boolean' ? row.loupe : false,
			boardWidth: typeof row.boardWidth === 'number' ? row.boardWidth : 0,
			boardHeight:
				typeof row.boardHeight === 'number' ? row.boardHeight : 0,
			description:
				typeof row.description === 'string' ? row.description : '',
			timer: typeof row.timer === 'boolean' ? row.timer : false,
			slug: typeof row.slug === 'string' ? row.slug : '',
		})
	})

	return games
}
