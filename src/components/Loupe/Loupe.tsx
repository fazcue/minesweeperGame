import useStore from '@/store/store'
import styles from './Loupe.module.css'
import Switch from '../Switch/Switch'

export default function Loupe(): React.JSX.Element {
	const isLouping = useStore((state) => state.isLouping)
	const setIsLouping = useStore((state) => state.setIsLouping)

	const onChange = () => {
		setIsLouping(!isLouping)
	}

	return (
		<div className={styles.loupe}>
			<p>👀</p>
			<Switch onChange={onChange} checked={isLouping} />
		</div>
	)
}
