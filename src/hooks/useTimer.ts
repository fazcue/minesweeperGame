import { useEffect } from 'react'

const useTimer = (timer: boolean, updateCurrentTime: () => void) => {
	useEffect(() => {
		const interval = setInterval(() => {
			if (timer) {
				updateCurrentTime()
			}
		}, 1000)

		return () => clearInterval(interval)
	}, [timer, updateCurrentTime])
}

export default useTimer
