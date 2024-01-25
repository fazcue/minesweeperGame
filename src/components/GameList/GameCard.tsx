import { Game } from '@/types/types'
import Link from 'next/link'
import styles from './GameCard.module.css'

interface Props {
	game: Game
}

export default function GameCard({ game }: Props) {
	return (
		<Link href={`/${game.slug}`} className={styles.card}>
			<h3>{game.name}</h3>
			<p>{game.description}</p>
		</Link>
	)
}
