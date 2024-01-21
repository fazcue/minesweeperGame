import useStore from '@/store/store'
import Loupe from '../Loupe/Loupe'
import styles from './Helpers.module.css'

export default function Helpers(): React.JSX.Element {
	const allowLoupe = useStore((state) => state.allowLoupe)

	return <div className={styles.helpers}>{allowLoupe && <Loupe />}</div>
}
