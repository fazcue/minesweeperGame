import useStore from '@/store/store'
import styles from './Switch.module.css'

interface Props {
	onChange: () => void
	checked: boolean
}

export default function Switch({
	onChange,
	checked,
}: Props): React.JSX.Element {
	const asInfoOnly = useStore((state) => state.asInfoOnly)

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
