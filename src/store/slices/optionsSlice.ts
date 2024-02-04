import { StateCreator } from 'zustand'

export interface OptionsSlice {
	allowMineMarker: boolean
	setAllowMineMarker: (allowMineMarker: boolean) => void

	allowLoupe: boolean
	setAllowLoupe: (allowLoupe: boolean) => void

	asInfoOnly: boolean
	setAsInfoOnly: (asInfoOnly: boolean) => void
}

export const optionsSlice: StateCreator<OptionsSlice> = (set, get) => ({
	allowMineMarker: true,
	setAllowMineMarker: (allowMineMarker) => set({ allowMineMarker }),

	allowLoupe: false,
	setAllowLoupe: (allowLoupe) => set({ allowLoupe }),

	asInfoOnly: false,
	setAsInfoOnly: (asInfoOnly) => set({ asInfoOnly }),
})
