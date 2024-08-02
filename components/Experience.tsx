'use client'

import React, { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { useTheme } from 'next-themes'

export default function Experience() {
	const { ref } = useSectionInView('Experience', 0.4)
	const { theme } = useTheme()

	const t = useTranslations('Experience')
	const locale = useLocale()

	return (
		<section id='experience' className='scroll-mt-28 mb-28 sm:mb-40' ref={ref}>
			<SectionHeading>{t('label')}</SectionHeading>
			<VerticalTimeline lineColor=''>
				{locale === 'en' &&
					experiencesData[0].english.map((item, index) => (
						<React.Fragment key={index}>
							<VerticalTimelineElement
								visible={true}
								contentStyle={{
									background:
										theme === 'light' ? '#f3f4f6' : 'rgba(225, 255, 255, 0.05)',
									boxShadow: 'none',
									border: '1px solid rgba(0, 0, 0, 0.05)',
									textAlign: 'left',
									padding: '1.3rem 2rem',
								}}
								contentArrowStyle={{
									borderRight:
										theme === 'light'
											? '0.4rem solid #9ca3af'
											: '0.4rem solid rgba(225, 255, 255, 0.05)',
								}}
								date={item.date}
								icon={item.icon}
								iconStyle={{
									background: theme === 'light' ? 'white' : '#1B2432',
									fontSize: '1.5rem',
								}}
							>
								<h3 className='!font-semibold capitalize'>{item.title}</h3>
								<p className='!font-normal !mt-0'>{item.location}</p>
								<p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
									{item.description}
								</p>
							</VerticalTimelineElement>
						</React.Fragment>
					))}

				{locale === 'id' &&
					experiencesData[0].indonesia.map((item, index) => (
						<React.Fragment key={index}>
							<VerticalTimelineElement
								visible={true}
								contentStyle={{
									background:
										theme === 'light' ? '#f3f4f6' : 'rgba(225, 255, 255, 0.05)',
									boxShadow: 'none',
									border: '1px solid rgba(0, 0, 0, 0.05)',
									textAlign: 'left',
									padding: '1.3rem 2rem',
								}}
								contentArrowStyle={{
									borderRight:
										theme === 'light'
											? '0.4rem solid #9ca3af'
											: '0.4rem solid rgba(225, 255, 255, 0.05)',
								}}
								date={item.date}
								icon={item.icon}
								iconStyle={{
									background: theme === 'light' ? 'white' : '#1B2432',
									fontSize: '1.5rem',
								}}
							>
								<h3 className='!font-semibold capitalize'>{item.title}</h3>
								<p className='!font-normal !mt-0'>{item.location}</p>
								<p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
									{item.description}
								</p>
							</VerticalTimelineElement>
						</React.Fragment>
					))}
			</VerticalTimeline>
		</section>
	)
}
