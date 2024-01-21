import { StateCreator } from 'zustand'

export interface OptionsSlice {
	playing: boolean
	togglePlaying: () => void
	allowMineMarker: boolean
	setAllowMineMarker: (allowMineMarker: boolean) => void
	allowLoupe: boolean
	setAllowLoupe: (allowLoupe: boolean) => void
}

export const optionsSlice: StateCreator<OptionsSlice> = (set, get) => ({
	playing: false,
	togglePlaying: () => set({ playing: !get().playing }),
	allowMineMarker: true,
	setAllowMineMarker: (allowMineMarker) => set({ allowMineMarker }),
	allowLoupe: false,
	setAllowLoupe: (allowLoupe) => set({ allowLoupe }),
})
