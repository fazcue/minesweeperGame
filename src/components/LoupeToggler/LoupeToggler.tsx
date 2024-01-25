import useStore from '@/store/store'
import Switch from '../Switch/Switch'

interface Props {
	asInfoOnly?: boolean
}

export default function LoupeToggler({
	asInfoOnly = false,
}: Props): React.JSX.Element {
	const allowLoupe = useStore((state) => state.allowLoupe)
	const setAllowLoupe = useStore((state) => state.setAllowLoupe)
	const setLoupe = useStore((state) => state.setLoupe)

	const onChange = () => {
		setAllowLoupe(!allowLoupe)
		setLoupe(false)
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
