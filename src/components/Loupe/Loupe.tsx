import useStore from '@/store/store'
import styles from './Loupe.module.css'
import Switch from '../Switch/Switch'

export default function Loupe() {
	const { loupe, setLoupe } = useStore()

	const onChange = () => {
		setLoupe(!loupe)
		console.log('loupe')
	}

	return (
		<div className={styles.loupe}>
			<p>👀</p>
			<Switch onChange={onChange} checked={loupe} />
		</div>
	)
}
