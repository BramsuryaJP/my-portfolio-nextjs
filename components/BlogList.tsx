'use client'

import { getBlogList } from '@/api/Blog'
import React, { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import useSectionInView from '@/lib/hooks'
import BlogCard from './BlogCard'

export default function BlogList() {
	const devToUsername = 'bramsuryajp'
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
			</div>
		</section>
	)
}
