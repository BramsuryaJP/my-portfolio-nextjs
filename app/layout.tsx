import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/ActiveSectionContextProvider'
import { Toaster } from 'react-hot-toast'
import ThemeToggler from '@/components/ThemeToggler'
import ThemeContextProvider from '@/context/ThemeContextProvider'

const inter = Inter({
	subsets: ['latin'],
})

export const metadata = {
	title: 'Bramsurya | Personal portfolio',
	description: 'Bramsurya is a front-end developer with 2 years of experience.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className='!scroll-smooth'>
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 relative pt-28 sm:pt-36`}
			>
				<div
					className='absolute -z-10 right-[11rem] top-[-6rem] h-[31.25rem] w-[31.25rem] rounded-full 
        bg-[#42c697] blur-[10rem] sm:w-[68.75rem]'
				></div>
				<div
					className='absolute -z-10 left-[-35rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 
        2xl:left-[-5rem] top-[-1rem] h-[31.25rem] w-[50rem] rounded-full bg-[#4bc8dd] blur-[10rem] 
        sm:w-[68.75rem]'
				></div>

				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<ThemeToggler />
						<Toaster position='top-right' />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	)
}

