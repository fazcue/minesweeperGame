import useStore from '@/store/store'
import Switch from '../Switch/Switch'

export default function LoupeToggler(): React.JSX.Element {
	const { allowLoupe, setAllowLoupe, setLoupe } = useStore()

	const onChange = () => {
		setAllowLoupe(!allowLoupe)
		setLoupe(false)
	}

	return (
		<>
			<p>loupe</p>
			<Switch onChange={onChange} checked={allowLoupe} />
		</>
	)
}
