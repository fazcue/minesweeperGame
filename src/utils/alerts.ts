import Swal from 'sweetalert2'
import { LOSTGAME_ICONS } from '@/config/config'
import { randomIcons } from './icons'
import useStore from '@/store/store'

const wonModal = () => {
	const resetGame = useStore.getState().resetGame
	const resetSettings = useStore.getState().resetSettings

	Swal.fire({
		title: '<div><span style="font-size: 64px">😏</span><h2>Congrats, You won!</h2></div>',
		confirmButtonText: 'Play again',
		denyButtonText: 'Change settings',
		showDenyButton: true,
	}).then((result) => {
		if (result.isConfirmed) {
			resetGame()
		}
		if (result.isDenied) {
			resetSettings()
		}
	})
}

const lostModal = () => {
	const resetGame = useStore.getState().resetGame
	const resetSettings = useStore.getState().resetSettings

	const icon = randomIcons(LOSTGAME_ICONS)

	Swal.fire({
		title:
			'<div><span style="font-size: 64px">' +
			icon.icon +
			'</span><h2>' +
			icon.message +
			' You lost</h2></div>',
		confirmButtonText: 'Play again',
		denyButtonText: 'Change settings',
		showDenyButton: true,
	}).then((result) => {
		if (result.isConfirmed) {
			resetGame()
		}
		if (result.isDenied) {
			resetSettings()
		}
	})
}

export { wonModal, lostModal }
