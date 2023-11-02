'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import useSectionInView from '@/lib/hooks'

export default function About() {
	const { ref } = useSectionInView('About', 0.75)

	return (
		<motion.section
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			className='mb-28 max-w-[45rem] text-center !leading-8 sm:mb-40 scroll-mt-28'
			id='about'
		>
			<SectionHeading>About Me</SectionHeading>

			<p className='mb-3'>
				After graduating from vocational high school majoring in{' '}
				<span className='font-medium'>Software Engineering</span>, I decided to
				pursue my passion for programming. I enrolled in a coding bootcamp and
				learned <span className='font-medium'>back-end web development</span>.{' '}
				<span className='italic'>My favorite part of programming</span> is the
				problem-solving aspect and learning some new code syntax. I{' '}
				<span className='underline'>love</span> the feeling of finally figuring
				out a solution to a problem and finding something new so it giving me
				more experience. My core stack is{' '}
				<span className='font-medium'>
					React, Next.js, Nest.js, and PostgreSQL
				</span>
				. I am also familiar with TypeScript and Prisma. I am always looking to
				learn new technologies. I am currently looking for a{' '}
				<span className='font-medium'>full-time position</span> as a front-end
				developer.
			</p>

			<p>
				<span className='italic'>When I'm not doing some coding</span>, I enjoy
				playing video games, watching movies, and sometimes doing some
				freelances or sidejobs to make me gain more experience. I also enjoy{' '}
				<span className='font-medium'>learning new things</span>. I am currently
				learning about <span className='font-medium'>Vue and Nuxt JS</span>. I'm
				also learning how to build my own side business.
			</p>
		</motion.section>
	)
}