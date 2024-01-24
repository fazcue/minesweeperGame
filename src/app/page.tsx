import CustomGame from '@/components/CustomGame/CustomGame'
import EmptySpace from '@/components/EmptySpace/EmptySpace'
import GameList from '@/components/GameList/GameList'

export default function Home(): React.JSX.Element {
	return (
		<div className="container">
			<h1>MineSweeper</h1>
			<CustomGame />
			<EmptySpace height={50} />
			<GameList />
		</div>
	)
}
