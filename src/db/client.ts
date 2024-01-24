import { createClient } from '@libsql/client'
import { parseGames, parseSlugs } from './parsers'

const client = createClient({
	url: process.env.TURSO_URL ?? '',
	authToken: process.env.TURSO_AUTH_TOKEN ?? '',
})

export const getGames = async () => {
	const result = await client.execute('SELECT * FROM games')
	return parseGames(result.rows)
}

export const getGamesSlugs = async () => {
	const result = await client.execute('SELECT slug FROM games')
	return parseSlugs(result.rows)
}
