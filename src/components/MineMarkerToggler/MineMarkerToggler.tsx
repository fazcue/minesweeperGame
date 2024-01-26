import useStore from '@/store/store'
import Switch from '../Switch/Switch'

export default function MineMarkerToggler(): React.JSX.Element {
	const allowMineMarker = useStore((state) => state.allowMineMarker)
	const setAllowMineMarker = useStore((state) => state.setAllowMineMarker)

	const onChange = () => {
		setAllowMineMarker(!allowMineMarker)
	}

	return (
		<>
			<p>mine marker</p>
			<Switch onChange={onChange} checked={allowMineMarker} />
		</>
	)
}
