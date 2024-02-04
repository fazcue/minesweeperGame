import useStore from '@/store/store'
import Switch from '../Switch/Switch'

export default function LoupeToggler(): React.JSX.Element {
	const allowLoupe = useStore((state) => state.allowLoupe)
	const setAllowLoupe = useStore((state) => state.setAllowLoupe)

	const setIsLouping = useStore((state) => state.setIsLouping)
	const asInfoOnly = useStore((state) => state.asInfoOnly)

	const onChange = () => {
		setAllowLoupe(!allowLoupe)
		setIsLouping(false)
	}

	return (
		<>
			<p>loupe</p>
			<Switch
				onChange={onChange}
				checked={allowLoupe}
				asInfoOnly={asInfoOnly}
			/>
		</>
	)
}
