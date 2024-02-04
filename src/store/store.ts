import { create } from 'zustand'
import { TimerSlice, timerSlice } from './slices/timerSlice'
import { OptionsSlice, optionsSlice } from './slices/optionsSlice'
import { BoardSlice, boardSlice } from './slices/boardSlice'
import { SharedSlice, sharedSlice } from './slices/sharedSlice'
import { GameSlice, gameSlice } from './slices/gameSlice'

const useStore = create<
	TimerSlice & OptionsSlice & BoardSlice & GameSlice & SharedSlice
>()((...a) => ({
	...timerSlice(...a),
	...optionsSlice(...a),
	...boardSlice(...a),
	...gameSlice(...a),
	...sharedSlice(...a),
}))

export default useStore
