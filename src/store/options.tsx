import { create } from 'zustand'

interface Options {
	allowMineMarker: boolean
	setAllowMineMarker: (allowMineMarker: boolean) => void
}

const useOptions = create<Options>((set, get) => ({
	allowMineMarker: true,
	setAllowMineMarker: (allowMineMarker) => set({ allowMineMarker }),
}))

export default useOptions
