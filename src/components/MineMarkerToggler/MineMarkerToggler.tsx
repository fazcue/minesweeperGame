import useOptions from '@/store/options'
import Switch from '../Switch/Switch'

export default function MineMarkerToggler() {
	const { allowMineMarker, setAllowMineMarker } = useOptions()

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
