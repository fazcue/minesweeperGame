import useStore from '@/store/store'
import styles from './Loupe.module.css'

export default function Loupe() {
	const { loupe, setLoupe } = useStore()

	const onClick = () => {
		setLoupe(!loupe)
		console.log('loupe')
	}

	return (
		<button
			className={`${styles.loupe} ${loupe && styles.selected}`}
			onClick={onClick}
		>
			👀
		</button>
	)
}
