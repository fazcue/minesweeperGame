import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
	return (
		<div className={styles.header}>
			<Link href={'/'}>
				<p>Minesweeper</p>
			</Link>
			<div className={styles.menu}>
				<Link href={'/#custom-game'}>
					<span>Custom Game</span>
				</Link>
				<Link href={'/#preset-games'}>
					<span>Preset Games</span>
				</Link>
			</div>
		</div>
	)
}
