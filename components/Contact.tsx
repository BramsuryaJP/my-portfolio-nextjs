'use client'

import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import useSectionInView from '@/lib/hooks'

import ButtonContactForm from './ButtonContactForm'
import toast from 'react-hot-toast'
import { sendEmail } from '@/actions/sendEmail'
import { useTranslations } from 'next-intl'

export default function Contact() {
	const { ref } = useSectionInView('Contact', 0.7)
	const [loading, setLoading] = useState(false)

	const t = useTranslations('Contact')

	return (
		<motion.section
			ref={ref}
			id='contact'
			className='scroll-mt-28 text-center mb-20 sm:mb-28 w-[min(100%, 38rem)]'
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>{t('label')}</SectionHeading>

			<p className='text-gray-700 dark:text-white/80 -mt-6'>
				{t('subLabelOne')}{' '}
				<a
					href='mailto:bramsuryajohannespaulus.work@gmail.com'
					className='underline'
				>
					bramsuryajohannespaulus.work@gmail.com
				</a>{' '}
				{t('subLabelTwo')}
			</p>

			<form
				onSubmit={async (event) => {
					event.preventDefault() // prevent the default form submission
					setLoading(true) // set loading to true when form is submitted

					const formData = new FormData(event.currentTarget)

					const { data, error } = await sendEmail(formData)

					if (error) {
						toast.error(error)
						setLoading(false)
						return
					} else {
						toast.success('Email sent successfully!')
					}

					setLoading(false)
				}}
				className='mt-10 flex flex-col text-center dark:text-black'
			>
				<input
					name='senderEmail'
					type='email'
					className='rounded-lg h-14 borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
					placeholder={t('formPlaceholderOne')}
					required
					maxLength={100}
				/>
				<textarea
					name='message'
					className='my-3 h-52 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
					placeholder={t('formPlaceholderTwo')}
					maxLength={5000}
				></textarea>
				<ButtonContactForm loading={loading} />
			</form>
		</motion.section>
	)
}
