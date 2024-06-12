'use client'

import { getBlogList } from '@/api/Blog'
import React, { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import useSectionInView from '@/lib/hooks'
import BlogCard from './BlogCard'
import dynamic from 'next/dynamic'
import { Link } from '@/navigation'
import { useTheme } from '@/context/ThemeContextProvider'

const MotionWave = dynamic(
	() => import('motion-wave').then((module) => module.MotionWave),
	{ ssr: false },
)

export default function BlogList() {
	const devToUsername = 'bramsuryajp'
	const { theme } = useTheme()
	const [enter, setEnter] = useState(false)
	const [blogList, setBlogList] = useState([])

	const { ref } = useSectionInView('Blogs', 0.8)

	useEffect(() => {
		const fetchBlogList = async () => {
			const data = await getBlogList(devToUsername)
			setBlogList(data)
		}

		fetchBlogList()
	}, [])

	return (
		<section
			ref={ref}
			className='mb-28 max-w-5xl sm:mb-40 scroll-mt-28'
			id='blogs'
		>
			<SectionHeading>Blogs</SectionHeading>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{blogList.map((blog, index) => (
					<React.Fragment key={index}>
						<BlogCard blogList={blog} />
					</React.Fragment>
				))}
				<div className='relative h-[20rem] md:h-full rounded-lg border border-black/5 p-2.5 text-sm transition-[filter] duration-700'>
					<div
						className='absolute inset-0 overflow-clip'
						onMouseEnter={() => setEnter(true)}
						onMouseLeave={() => setEnter(false)}
					>
						<MotionWave
							width={280}
							height={280}
							className='z-0 size-full h-[20rem] md:h-full w-full rounded-lg bg-gray-100 dark:bg-white/10'
							initialConfig={{
								amplitude: 30,
								frequency: 0.4,
								offset: 50,
								speed: 4,
								color: theme === 'dark' ? '#000' : 'fff',
							}}
							motionConfig={{
								amplitude: {
									loop: true,
									value: 60,
								},
								frequency: {
									duration: 8,
									loop: true,
									value: 1,
								},
								offset: {
									duration: 0.5,
									ease: [0.16, 1, 0.3, 1],
									loop: false,
									value: enter ? -200 : 50,
								},
								speed: {
									loop: true,
									loopDelay: 1,
									value: 6,
								},
								color: {
									value: theme === 'light' ? '#000' : '#fff',
									duration: 6,
								},
							}}
						/>
						<Link
							className='absolute inset-0 z-10 flex items-center justify-center gap-2 text-lg font-semibold text-white mix-blend-difference lg:text-2xl'
							href='/blog'
						>
							Explore More
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
