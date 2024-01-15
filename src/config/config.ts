import { BoardSize, Icons } from '@/types/types'

const INITIAL_MINES: number = 30

const SIZES: BoardSize[] = [
	{ rows: 10, columns: 10 },
	{ rows: 15, columns: 15 },
	{ rows: 20, columns: 20 },
]

const LOSTGAME_ICONS: Icons[] = [
	{
		icon: '💣',
		message: 'Boom!',
	},
	{
		icon: '😮',
		message: 'Doh!',
	},
	{
		icon: '🤣',
		message: 'LOL!',
	},
	{
		icon: '😆',
		message: 'LMAO!',
	},
	{
		icon: '😬',
		message: 'Haha!',
	},
	{
		icon: '😭',
		message: 'Sick!',
	},
	{
		icon: '😱',
		message: 'Oh no!',
	},
	{
		icon: '😨',
		message: 'Uh oh!',
	},
	{
		icon: '😡',
		message: 'Dang!',
	},
	{
		icon: '🤬',
		message: 'Grrr!',
	},
	{
		icon: '🤯',
		message: 'Oof!',
	},
	{
		icon: '😵',
		message: 'Oops!',
	},
	{
		icon: '🤕',
		message: 'OUCH!',
	},
	{
		icon: '😳',
		message: 'Yikes!',
	},
	{
		icon: '😫',
		message: 'Aww!',
	},
	{
		icon: '🙄',
		message: 'Huh?',
	},
]

export { INITIAL_MINES, SIZES, LOSTGAME_ICONS }
