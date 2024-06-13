import BlogHeader from '@/components/BlogHeader'
import ActivePageContextProvider from '@/context/ActivePageContextProvider'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

export default async function blogLayout({ children }: Props) {
	return (
		<ActivePageContextProvider>
			<div>
				<BlogHeader />
				{children}
			</div>
		</ActivePageContextProvider>
	)
}
