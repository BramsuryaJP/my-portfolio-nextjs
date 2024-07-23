import { useTranslations } from 'next-intl'
import React from 'react'

export default function Footer() {
	const t = useTranslations('Footer')

	return (
		<footer className='mb-10 px-4 text-center text-gray-500 dark:text-white/70'>
			<small className='mb-2 block text-xs'>
				&copy; 2023-2024 Bramsurya. All rights reserved.
			</small>
			<p className='text-xs'>
				<span className='font-semibold'>{t('footerAbout')}:</span>{' '}
				{t('footerMade')} React & Next.js (App Router & Server Actions),
				TypeScript, Tailwind CSS, Bun, Framer Motion, Next Internationalization
				(i18n), React Email & Resend, Axios, Vercel hosting.
			</p>
		</footer>
	)
}
