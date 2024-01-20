import useOptions from '@/store/options'
import useStore from '@/store/store'
import Switch from '../Switch/Switch'

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
			<Switch onChange={onChange} checked={allowLoupe} />
		</>
	)
}
