'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import useSectionInView from '@/lib/hooks'
import { useTranslations } from 'next-intl'

export default function About() {
	const { ref } = useSectionInView('About', 0.75)

	const t = useTranslations('About')

	return (
		<motion.section
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			className='mb-28 max-w-[45rem] text-center !leading-8 sm:mb-40 scroll-mt-28'
			id='about'
		>
			<SectionHeading>{t('label')}</SectionHeading>

			<p className='mb-3'>
				{t('descOne')} <span className='font-medium'>{t('descTwo')}</span>,{' '}
				{t('descThree')} <span className='font-medium'>{t('descFour')}</span>.{' '}
				<span className='italic'>{t('descFive')}</span> {t('descSix')}{' '}
				<span className='underline'>{t('descSeven')}</span> {t('descEight')}{' '}
				<span className='font-medium'>{t('descNine')}</span>. {t('descTen')}{' '}
				<span className='font-medium'>{t('descEleven')}</span> {t('descTwelve')}
			</p>

			<p>
				<span className='italic'>{t('descThirteen')}</span>, {t('descFourteen')}{' '}
				<span className='font-medium'>{t('descFifteen')}</span>.{' '}
				{t('descSixteen')}{' '}
				<span className='font-medium'>{t('descSeventeen')}</span>.{' '}
				{t('descEighteen')}
			</p>
		</motion.section>
	)
}
