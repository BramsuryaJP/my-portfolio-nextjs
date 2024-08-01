'use client'

import React, { useState, FormEvent } from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import useSectionInView from '@/lib/hooks'
import ButtonContactForm from './ButtonContactForm'
import toast from 'react-hot-toast'
import { sendEmail } from '@/actions/sendEmail'
import { useTranslations } from 'next-intl'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export default function Contact() {
	const { ref } = useSectionInView('Contact', 0.7)
	const [loading, setLoading] = useState(false)
	const { executeRecaptcha } = useGoogleReCaptcha()
	const t = useTranslations('Contact')

	const [formData, setFormData] = useState({
		senderEmail: '',
		message: '',
	})

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setLoading(true)

		if (!executeRecaptcha) {
			toast.error('Unknown Error Occured')
			setLoading(false)
			return
		}

		try {
			const token = await executeRecaptcha('submit_contact')

			// Create FormData object
			const formDataToSend = new FormData()

			// Append form data
			formDataToSend.append('senderEmail', formData.senderEmail)
			formDataToSend.append('message', formData.message)
			formDataToSend.append('recaptchaToken', token)

			const { error } = await sendEmail(formDataToSend)

			if (error) {
				toast.error(error)
			} else {
				toast.success('Email sent successfully!')
				setFormData({ senderEmail: '', message: '' }) // Reset form
			}
		} catch (error) {
			console.error('An error occurred:', error)
			toast.error('An unexpected error occurred. Please try again.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<motion.section
			ref={ref}
			id='contact'
			className='scroll-mt-28 text-center mb-20 sm:mb-28 w-[min(100%, 38rem)]'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
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
				onSubmit={handleSubmit}
				className='mt-10 flex flex-col text-center dark:text-black'
			>
				<input
					name='senderEmail'
					type='email'
					value={formData.senderEmail}
					onChange={handleInputChange}
					className='rounded-lg h-14 borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
					placeholder={t('formPlaceholderOne')}
					required
					maxLength={100}
				/>
				<textarea
					name='message'
					value={formData.message}
					onChange={handleInputChange}
					className='my-3 h-52 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
					placeholder={t('formPlaceholderTwo')}
					required
					maxLength={5000}
				></textarea>
				<ButtonContactForm loading={loading} />
			</form>
		</motion.section>
	)
}
