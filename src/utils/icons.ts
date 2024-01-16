import { Icons } from '@/types/types'

function randomIcons(icons: Icons[]) {
	return icons[Math.floor(Math.random() * icons.length)]
}

export { randomIcons }
