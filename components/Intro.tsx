'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'

import profileImage from '@/public/bram.jpg'
import useSectionInView from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider'
import { useTranslations } from 'next-intl'

export default function Intro() {
	const { ref } = useSectionInView('Home', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	const t = useTranslations('Intro')

	return (
		<section
			ref={ref}
			className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
			id='home'
		>
			<div className='flex items-center justify-center'>
				<div className='relative'>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2,
						}}
					>
						<Image
							src={profileImage}
							alt='My Image'
							quality='95'
							priority={true}
							className='w-32 h-32 object-cover rounded-full border-[0.35rem] border-white shadow-xl'
						/>
					</motion.div>
					<motion.span
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
						className='text-4xl absolute bottom-0 right-0'
					>
						👋
					</motion.span>
				</div>
			</div>

			<motion.h1
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
			>
				<span className='font-bold'>{t('name')}</span> {t('im')}{' '}
				<span className='font-bold'>{t('role')}</span> {t('with')}{' '}
				<span className='font-bold'>{t('years')}</span> {t('enjoy')}{' '}
				<span className='italic'>{t('sites')}</span>. {t('focus')}{' '}
				<span className='underline'>{t('tech')}</span>.
			</motion.h1>

			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
			>
				<Link
					href='#contact'
					className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
					onClick={() => {
						setActiveSection('Contact')
						setTimeOfLastClick(Date.now())
					}}
				>
					{t('contactLabel')}{' '}
					<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition duration-150' />
				</Link>
				<a
					className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
					href='/Bram_CV.pdf'
					download={true}
				>
					Download CV{' '}
					<HiDownload className='opacity-60 group-hover:translate-y-1 transition duration-150' />
				</a>
				<a
					className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full outline-none
          focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
					href='https://www.linkedin.com/in/bramsurya-johannes-paulus/'
					target='_blank'
				>
					<BsLinkedin />
				</a>
				<a
					className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full outline-none
          focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
					href='https://github.com/BramsuryaJP'
					target='_blank'
				>
					<BsGithub />
				</a>
			</motion.div>
		</section>
	)
}
