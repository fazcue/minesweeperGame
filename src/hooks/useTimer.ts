import { useEffect } from 'react'
import useStore from '@/store/store'

const useTimer = () => {
	const timer = useStore((state) => state.timer)
	const updateCurrentTime = useStore((state) => state.updateCurrentTime)

	useEffect(() => {
		const interval = setInterval(() => {
			if (timer) {
				updateCurrentTime()
			}
		}, 1000)

		return () => clearInterval(interval)
	}, [updateCurrentTime, timer])
}

export default useTimer
