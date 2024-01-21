import Loupe from '../Loupe/Loupe'
import styles from './Helpers.module.css'
import useStore from '@/store/store'

export default function Helpers() {
	const { allowLoupe } = useStore()

	return <div className={styles.helpers}>{allowLoupe && <Loupe />}</div>
}
