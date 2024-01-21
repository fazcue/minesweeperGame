import styles from './Switch.module.css'

interface Props {
	onChange: () => void
	checked: boolean
}

export default function Switch({
	onChange,
	checked,
}: Props): React.JSX.Element {
	return (
		<label className={styles.switch}>
			<input type="checkbox" onChange={onChange} checked={checked} />
			<span className={`${styles.slider} ${styles.round}`}></span>
		</label>
	)
}
