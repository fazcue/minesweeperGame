import { StateCreator } from 'zustand'

import { BoardSlice } from './boardSlice'
import { OptionsSlice } from './optionsSlice'
import { GameSlice } from './gameSlice'
import { TimerSlice } from './timerSlice'

export interface SharedSlice {
	resetGame: () => void
	resetSettings: () => void
}

export const sharedSlice: StateCreator<
	BoardSlice & OptionsSlice & GameSlice & TimerSlice,
	[],
	[],
	SharedSlice
> = (set, get) => ({
	resetGame: () => {
		get().generateNewBoard()
		set({
			playing: true,
			isLouping: false,
			mines: { ...get().mines, discovered: 0 },
			winner: false,
			timer: true,
			currentTime: 0,
		})
	},
	resetSettings: () => {
		set({
			playing: false,
			isLouping: false,
			mines: { ...get().mines, discovered: 0 },
			winner: false,
			timer: false,
			currentTime: 0,
		})
	},
})
