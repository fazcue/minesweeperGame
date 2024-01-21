import { StateCreator } from 'zustand'

import { BoardSlice } from './boardSlice'
import { OptionsSlice } from './optionsSlice'
import { LoupeSlice } from './loupeSlice'

export interface SharedSlice {
	resetGame: () => void
	resetSettings: () => void
}

export const sharedSlice: StateCreator<
	BoardSlice & OptionsSlice & LoupeSlice,
	[],
	[],
	SharedSlice
> = (set, get) => ({
	resetGame: () => {
		get().generateNewBoard()
		set({ playing: true, mines: { ...get().mines, discovered: 0 } })
		set({ mines: { ...get().mines, discovered: 0 } })
		set({ loupe: false })
	},
	resetSettings: () => {
		set({
			playing: false,
			loupe: false,
			mines: { ...get().mines, discovered: 0 },
		})
	},
})
