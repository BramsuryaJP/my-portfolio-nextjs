import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/ActiveSectionContextProvider'
import { Toaster } from 'react-hot-toast'
import ThemeToggler from '@/components/ThemeToggler'
import LangToggler from '@/components/LangToggler'
import { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { ThemeProvider } from 'next-themes'
import RecaptchaProvider from '@/components/RecaptchaProvider'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

const inter = Inter({
	subsets: ['latin'],
})

type Props = {
	children: ReactNode
	params: { locale: string }
}

export const metadata = {
	title: 'Bramsurya | Personal portfolio',
	description: 'Bramsurya is a front-end developer with 2 years of experience.',
}

export default async function LocaleLayout({
	children,
	params: { locale },
}: Props) {
	const messages = await getMessages()

	if (!messages) {
		notFound()
	}

	return (
		<html lang={locale} className='!scroll-smooth'>
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 relative`}
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

				<ThemeProvider attribute='class'>
					<RecaptchaProvider>
						<ActiveSectionContextProvider>
							<NextIntlClientProvider messages={messages}>
								{children}
								<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
								<LangToggler />
								<ThemeToggler />
								<Toaster position='top-right' />
							</NextIntlClientProvider>
						</ActiveSectionContextProvider>
					</RecaptchaProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
