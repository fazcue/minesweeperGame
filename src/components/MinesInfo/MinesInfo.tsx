import useStore from '@/store/store'
import { useShallow } from 'zustand/react/shallow'

export default function MinesInfo() {
	const mines = useStore((state) => state.mines)

	return <p>Mines to discover: {mines.total - mines.discovered}</p>
}
