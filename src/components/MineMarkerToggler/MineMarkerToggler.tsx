import useStore from '@/store/store'
import Switch from '../Switch/Switch'

export default function MineMarkerToggler() {
	const { allowMineMarker, setAllowMineMarker } = useStore()

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
