import useOptions from '@/store/options'
import styles from './LoupeToggler.module.css'
import useStore from '@/store/store'

export default function LoupeToggler() {
	const { allowLoupe, setAllowLoupe } = useOptions()
	const { setLoupe } = useStore()

	const onChange = () => {
		setAllowLoupe(!allowLoupe)
		setLoupe(false)
	}

	return (
		<>
			<p>loupe</p>
			<label className={styles.switch}>
				<input
					type="checkbox"
					onChange={onChange}
					checked={allowLoupe}
				/>
				<span className={`${styles.slider} ${styles.round}`}></span>
			</label>
		</>
	)
}
