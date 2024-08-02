'use client'

import { useEffect, useTransition } from 'react'
import { useRouter, usePathname } from '../navigation'
import { useLocale } from 'next-intl'

import inaIcon from '@/public/ina-icon.svg'
import enIcon from '@/public/en-icon.svg'
import Image from 'next/image'
import { useGoogleAnalytics } from '@/lib/hooks'

export default function LangToggler() {
	const router = useRouter()

	const [isPending, startTransition] = useTransition()
	const pathname = usePathname()
	const locale = useLocale()
	const { trackEvent } = useGoogleAnalytics()

	const nextLocale = locale === 'en' ? 'id' : 'en'

	function onButtonClick() {
		trackEvent('change', 'language', nextLocale)
		startTransition(() => {
			router.replace(pathname, { locale: nextLocale })
		})
	}

	useEffect(() => {
		trackEvent('view', 'language_toggle', locale)
	}, [])

	return (
		<button
			className='fixed bottom-40 right-3  bg-white w-[3rem] h-[3rem] bg-opacity-80 z-10
      backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex 
      items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
			disabled={isPending}
			onClick={onButtonClick}
		>
			<Image
				src={locale === 'en' ? inaIcon : enIcon}
				alt='language flag icon'
				className='w-4'
			/>
		</button>
	)
}
