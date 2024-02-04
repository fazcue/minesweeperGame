import { StateCreator } from 'zustand'

export interface TimerSlice {
	timer: boolean
	toggleTimer: () => void

	currentTime: number
	updateCurrentTime: () => void

	resetTimer: () => void
}

export const timerSlice: StateCreator<TimerSlice> = (set, get) => ({
	timer: false,
	toggleTimer: () => set({ timer: !get().timer }),

	currentTime: 0,
	updateCurrentTime: () => {
		set({ currentTime: get().currentTime + 1 })
	},

	resetTimer: () => set({ timer: false, currentTime: 0 }),
})
