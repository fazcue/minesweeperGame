import useStore from '@/store/store'
import Switch from '../Switch/Switch'

interface Props {
	asInfoOnly?: boolean
}

export default function MineMarkerToggler({
	asInfoOnly = false,
}: Props): React.JSX.Element {
	const allowMineMarker = useStore((state) => state.allowMineMarker)
	const setAllowMineMarker = useStore((state) => state.setAllowMineMarker)

	const onChange = () => {
		setAllowMineMarker(!allowMineMarker)
	}

	return (
		<>
			<p>mine marker</p>
			<Switch
				onChange={onChange}
				checked={allowMineMarker}
				asInfoOnly={asInfoOnly}
			/>
		</>
	)
}
