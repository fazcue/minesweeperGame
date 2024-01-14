import Swal from 'sweetalert2'

const wonModal = (resetGame: () => void) => {
	Swal.fire({
		icon: 'success',
		title: 'Congrats! You won',
		confirmButtonText: 'Play again',
	}).then((result) => {
		if (result.isConfirmed) {
			resetGame()
		}
	})
}

const lostModal = (resetGame: () => void) => {
	Swal.fire({
		icon: 'error',
		title: 'You lost',
		confirmButtonText: 'Play again',
	}).then((result) => {
		if (result.isConfirmed) {
			resetGame()
		}
	})
}

export { wonModal, lostModal }