interface Props {
	height?: number
}

export default function EmptySpace({ height = 20 }: Props): React.JSX.Element {
	return <div style={{ height: `${height}px` }}></div>
}
