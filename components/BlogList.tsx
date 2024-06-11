'use client'

import { getBlogList } from '@/api/Blog'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import useSectionInView from '@/lib/hooks'

export default function BlogList() {
	const devToUsername = 'bramsuryajp'
	const [blogList, setBlogList] = useState([])

	const { ref } = useSectionInView('Blogs', 0.75)

	useEffect(() => {
		const fetchBlogList = async () => {
			const data = await getBlogList(devToUsername)
			setBlogList(data)
		}

		fetchBlogList()
	}, [])

	console.log(blogList)

	return (
		<motion.section
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			className='mb-28 max-w-[45rem] text-center !leading-8 sm:mb-40 scroll-mt-28'
			id='blogs'
		>
			<SectionHeading>Blogs</SectionHeading>
		</motion.section>
	)
}
