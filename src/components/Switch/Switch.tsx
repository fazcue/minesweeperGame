import useStore from '@/store/store'
import styles from './Switch.module.css'
import classNames from 'classnames'

interface Props {
	onChange: () => void
	checked: boolean
}

export default function Switch({
	onChange,
	checked,
}: Props): React.JSX.Element {
	const asInfoOnly = useStore((state) => state.asInfoOnly)

	const switchClass = classNames(styles.slider, styles.round)

	return (
		<label className={styles.switch}>
			<input
				type="checkbox"
				onChange={onChange}
				checked={checked}
				disabled={asInfoOnly}
			/>
			<span className={switchClass}></span>
		</label>
	)
}
