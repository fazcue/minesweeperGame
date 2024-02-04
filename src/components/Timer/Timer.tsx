import useTimer from '@/hooks/useTimer'
import useStore from '@/store/store'

export default function Timer(): React.JSX.Element {
	const currentTime = useStore((state) => state.currentTime)

	useTimer()

	return <div>Timer: {currentTime}``</div>
}
