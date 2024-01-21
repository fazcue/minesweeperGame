import useStore from '@/store/store'
import useTimer from '@/hooks/useTimer'

export default function Timer(): React.JSX.Element {
	const timer = useStore((state) => state.timer)
	const currentTime = useStore((state) => state.currentTime)
	const updateCurrentTime = useStore((state) => state.updateCurrentTime)

	// hook
	useTimer(timer, updateCurrentTime)

	return <div>Timer: {currentTime}``</div>
}
