import Swal from 'sweetalert2'
import { LOSTGAME_ICONS } from '@/config/config'
import { randomIcons } from './icons'

interface WonLostModal {
	resetGame: () => void
	changeSettings: () => void
}

const wonModal = ({ resetGame, changeSettings }: WonLostModal) => {
	Swal.fire({
		title: '<div><span style="font-size: 64px">😏</span><h2>Congrats! You won</h2></div>',
		confirmButtonText: 'Play again',
		denyButtonText: 'Change settings',
		showDenyButton: true,
	}).then((result) => {
		if (result.isConfirmed) {
			resetGame()
		}
		if (result.isDenied) {
			changeSettings()
		}
	})
}

const lostModal = ({ resetGame, changeSettings }: WonLostModal) => {
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
			changeSettings()
		}
	})
}

export { wonModal, lostModal }
