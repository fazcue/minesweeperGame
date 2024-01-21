import { StateCreator } from 'zustand'

export interface GameSlice {
	winner: boolean
	setWinner: (winner: boolean) => void
}

export const gameSlice: StateCreator<GameSlice> = (set, get) => ({
	winner: false,
	setWinner: (winner) => set({ winner }),
})
