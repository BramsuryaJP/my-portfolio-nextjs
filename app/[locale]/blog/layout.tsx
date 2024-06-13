import BlogHeader from '@/components/BlogHeader'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

export default async function blogLayout({ children }: Props) {
	return (
		<div>
			<BlogHeader />
			{children}
		</div>
	)
}
