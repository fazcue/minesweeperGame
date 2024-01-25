import styles from './Footer.module.css'

export default function Footer() {
	return (
		<div className={styles.footer}>
			<p>
				by{' '}
				<a href="https://facuazcue.vercel.app" target="_blank">
					Facundo Azcue
				</a>
				{' - '}
				<a
					href="https://github.com/fazcue/minesweeperGame"
					target="_blank"
				>
					github
				</a>
			</p>
		</div>
	)
}
