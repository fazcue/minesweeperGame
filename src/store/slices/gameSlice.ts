import { StateCreator } from 'zustand'

export interface GameSlice {
	playing: boolean
	togglePlaying: () => void

	isLouping: boolean
	setIsLouping: (isLouping: boolean) => void

	winner: boolean
	setWinner: (winner: boolean) => void
}

export const gameSlice: StateCreator<GameSlice> = (set, get) => ({
	playing: false,
	togglePlaying: () => set({ playing: !get().playing }),

	isLouping: false,
	setIsLouping: (isLouping) => set({ isLouping }),

	winner: false,
	setWinner: (winner) => set({ winner }),
})
