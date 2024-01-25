import styles from './Switch.module.css'

interface Props {
	onChange: () => void
	checked: boolean
}

interface Props {
	asInfoOnly?: boolean
}

export default function Switch({
	onChange,
	asInfoOnly = false,
	checked,
}: Props): React.JSX.Element {
	return (
		<label className={styles.switch}>
			<input
				type="checkbox"
				onChange={onChange}
				checked={checked}
				disabled={asInfoOnly}
			/>
			<span className={`${styles.slider} ${styles.round}`}></span>
		</label>
	)
}
