'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import useSectionInView from '@/lib/hooks'

import ButtonContactForm from './ButtonContactForm'
import toast from 'react-hot-toast'
import { sendEmail } from '@/actions/sendEmail'

export default function Contact() {
	const { ref } = useSectionInView('Contact', 0.7)

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
			<SectionHeading>Contact Me</SectionHeading>

			<p className='text-gray-700 dark:text-white/80 -mt-6'>
				Please contact me directly at{' '}
				<a
					href='mailto:bramsuryajohannespaulus.work@gmail.com'
					className='underline'
				>
					bramsuryajohannespaulus.work@gmail.com
				</a>{' '}
				or through this form
			</p>

			<form
				action={async (formData) => {
					const { data, error } = await sendEmail(formData)

					if (error) {
						toast.error(error)
						return
					}

					toast.success('Email sent successfully!')
				}}
				className='mt-10 flex flex-col text-center dark:text-black'
			>
				<input
					name='senderEmail'
					type='email'
					className='rounded-lg h-14 borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
					placeholder='Your email'
					required
					maxLength={100}
				/>
				<textarea
					name='message'
					className='my-3 h-52 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
					placeholder='Leave your message'
					maxLength={5000}
				></textarea>
				<ButtonContactForm />
			</form>
		</motion.section>
	)
}
