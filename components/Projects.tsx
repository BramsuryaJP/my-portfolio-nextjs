'use client'

import React from 'react'

import { projectsData } from '@/lib/data'
import Project from './Project'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export default function Projects() {
	const { ref } = useSectionInView('Projects', 0.4)
	const locale = useLocale()

	const t = useTranslations('Project')

	return (
		<section className='scroll-mt-28 mb-28 sm:mb-40' id='projects' ref={ref}>
			<SectionHeading>{t('label')}</SectionHeading>
			<div>
				{locale === 'en' &&
					projectsData.english.map((project, index) => (
						<React.Fragment key={index}>
							<Project {...project} />
						</React.Fragment>
					))}

				{locale === 'id' &&
					projectsData.indonesian.map((project, index) => (
						<React.Fragment key={index}>
							<Project {...project} />
						</React.Fragment>
					))}
			</div>
		</section>
	)
}
