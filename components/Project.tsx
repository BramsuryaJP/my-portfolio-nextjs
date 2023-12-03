'use client'

import React, { useRef } from 'react'
import Image, { StaticImageData } from 'next/image'

import { motion, useScroll, useTransform } from 'framer-motion'

type ProjectProps = {
	title: string
	description: string
	tags: string[]
	imageUrl: string | StaticImageData
}

export default function Project({
	title,
	description,
	tags,
	imageUrl,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	})
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}
			className='group mb-3 sm:mb-8 last:mb-0'
		>
			<section
				className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 
      relative sm:h-[20rem] transition sm:group-even:pl-8 flex dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'
			>
				<div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] group-hover:sm:blur-sm transition duration-200'>
					<h3 className='text-2xl font-semibold'>{title}</h3>
					<p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
						{description}
					</p>
					<ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
						{tags.map((tag, index) => (
							<li
								className='bg-black/[0.7] dark:bg-black/30 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
								key={index}
							>
								{tag}
							</li>
						))}
					</ul>
				</div>

				<Image
					src={imageUrl}
					alt='Project I worked on'
					quality={95}
					priority
					className='absolute hidden sm:block top-1/2 -translate-y-1/2 group-odd:-right-40 w-[28.25rem] h-[15rem] rounded-lg 
          shadow-2xl
          transition duration-300 ease-out 
          group-hover:scale-[1.06] group-hover:-translate-x-1/2 group-hover:right-1/2 group-hover:left-1/2  
          group-hover:group-even:translate-x-28
          group-hover:group-even:-left-0
          group-even:-left-40'
				/>
			</section>
		</motion.div>
	)
}
