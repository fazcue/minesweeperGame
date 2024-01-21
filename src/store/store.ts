import { create } from 'zustand'
import { TimerSlice, timerSlice } from './slices/timerSlice'
import { OptionsSlice, optionsSlice } from './slices/optionsSlice'
import { BoardSlice, boardSlice } from './slices/boardSlice'
import { LoupeSlice, loupeSlice } from './slices/loupeSlice'
import { SharedSlice, sharedSlice } from './slices/sharedSlice'
import { GameSlice, gameSlice } from './slices/gameSlice'

const useStore = create<
	TimerSlice &
		OptionsSlice &
		BoardSlice &
		LoupeSlice &
		GameSlice &
		SharedSlice
>()((...a) => ({
	...timerSlice(...a),
	...optionsSlice(...a),
	...boardSlice(...a),
	...loupeSlice(...a),
	...gameSlice(...a),
	...sharedSlice(...a),
}))

export default useStore
