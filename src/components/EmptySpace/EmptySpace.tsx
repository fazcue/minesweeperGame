interface Props {
	height?: number
}

export default function EmptySpace({ height = 20 }: Props): JSX.Element {
	return <div style={{ height: `${height}px` }}></div>
}
