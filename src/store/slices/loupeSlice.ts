import { StateCreator } from 'zustand'

export interface LoupeSlice {
	loupe: boolean
	setLoupe: (loupe: boolean) => void
}

export const loupeSlice: StateCreator<LoupeSlice> = (set, get) => ({
	loupe: false,
	setLoupe: (loupe) => set({ loupe }),
})
