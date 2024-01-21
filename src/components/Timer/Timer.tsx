import useTimer from '@/hooks/useTimer'
import useStore from '@/store/store'

export default function Timer(): React.JSX.Element {
	const { timer, currentTime, updateCurrentTime } = useStore()
	useTimer(timer, updateCurrentTime)

	return <div>Timer: {currentTime}``</div>
}
