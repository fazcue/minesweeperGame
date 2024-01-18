import { create } from 'zustand'

interface Options {
	allowMineMarker: boolean
	setAllowMineMarker: (allowMineMarker: boolean) => void
	allowLoupe: boolean
	setAllowLoupe: (allowLoupe: boolean) => void
}

const useOptions = create<Options>((set, get) => ({
	allowMineMarker: true,
	setAllowMineMarker: (allowMineMarker) => set({ allowMineMarker }),
	allowLoupe: false,
	setAllowLoupe: (allowLoupe) => set({ allowLoupe }),
}))

export default useOptions
