'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import useSectionInView from '@/lib/hooks'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function Skills() {
	const { ref } = useSectionInView('Skills', 0.6)
	const t = useTranslations('Skill')

	const fadeInAnimationVariant = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.05 * index,
			},
		}),
	}

	return (
		<section
			ref={ref}
			className='mb-28 sm:mb-40 text-center max-w-[53rem] scroll-mt-28'
			id='skills'
		>
			<SectionHeading>{t('label')}</SectionHeading>
			<ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
				{skillsData.map((skill, index) => (
					<motion.li
						key={index}
						className='px-5 py-3 bg-white dark:bg-white/10 dark:text-white/80 borderBlack rounded-xl'
						variants={fadeInAnimationVariant}
						initial='initial'
						whileInView='animate'
						viewport={{
							once: true,
						}}
						custom={index}
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	)
}
