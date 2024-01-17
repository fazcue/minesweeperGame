import useOptions from '@/store/options'
import styles from './MineMarkerToggler.module.css'

export default function MineMarkerToggler() {
	const { allowMineMarker, setAllowMineMarker } = useOptions()

	const onChange = () => {
		setAllowMineMarker(!allowMineMarker)
	}

	return (
		<>
			<p>mine marker</p>
			<label className={styles.switch}>
				<input
					type="checkbox"
					onChange={onChange}
					checked={allowMineMarker}
				/>
				<span className={`${styles.slider} ${styles.round}`}></span>
			</label>
		</>
	)
}
