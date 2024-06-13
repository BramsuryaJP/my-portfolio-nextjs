'use client'

import { getBlogList } from '@/api/Blog'
import BlogCard from '@/components/BlogCard'
import SectionHeading from '@/components/SectionHeading'
import React, { useEffect, useState } from 'react'

export default function Blog() {
	const devToUsername = 'bramsuryajp'
	const [blogList, setBlogList] = useState([])

	useEffect(() => {
		const fetchBlogList = async () => {
			const data = await getBlogList(devToUsername)
			setBlogList(data)
		}

		fetchBlogList()
	}, [])

	return (
		<div className='flex flex-col items-center px-4 scroll-mt-28 pt-28 sm:pt-36'>
			<SectionHeading>My Blogs</SectionHeading>
			<div className='max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{blogList.map((blog, index) => (
					<React.Fragment key={index}>
						<BlogCard blogList={blog} index={index} />
					</React.Fragment>
				))}
			</div>
		</div>
	)
}
