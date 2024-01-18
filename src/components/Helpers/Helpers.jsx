import Loupe from '../Loupe/Loupe'
import styles from './Helpers.module.css'
import useOptions from '@/store/options'

export default function Helpers() {
	const { allowLoupe } = useOptions()

	return <div className={styles.helpers}>{allowLoupe && <Loupe />}</div>
}
