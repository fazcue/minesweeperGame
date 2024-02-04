import Board from '../Board/Board'
import MinesInfo from '../MinesInfo/MinesInfo'
import Timer from '../Timer/Timer'
import Helpers from '../Helpers/Helpers'

function GameBoard() {
	return (
		<>
			<MinesInfo />
			<Timer />
			<Board />
			<Helpers />
		</>
	)
}

export default GameBoard
