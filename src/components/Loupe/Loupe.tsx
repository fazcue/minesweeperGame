import useStore from '@/store/store'
import styles from './Loupe.module.css'
import Switch from '../Switch/Switch'

export default function Loupe(): React.JSX.Element {
	const loupe = useStore((state) => state.loupe)
	const setLoupe = useStore((state) => state.setLoupe)

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
