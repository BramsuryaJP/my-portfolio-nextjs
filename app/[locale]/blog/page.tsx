import { getBlogList } from '@/api/Blog'
import BlogCard from '@/components/Blog/BlogCard'
import SectionHeading from '@/components/SectionHeading'
import React from 'react'

export const revalidate = 300 // revalidate the data at most every hour

interface Blog {
	id: number
	title: string
	tag_list: string[]
	description: string
	slug: string
	// include other properties as needed
}

export default async function Blog() {
	const devToUsername = 'bramsuryajp'

	await new Promise((resolve) => setTimeout(resolve, 2000))

	const response = await getBlogList(devToUsername)

	const data = await response

	return (
		<div className='flex flex-col items-center px-4 scroll-mt-28 pt-28 sm:pt-36'>
			<SectionHeading>My Blogs</SectionHeading>
			<div className='max-w-5xl w-fit items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{data.map((blog: Blog, index: number) => (
					<React.Fragment key={index}>
						<BlogCard blogList={blog} index={index} />
					</React.Fragment>
				))}
			</div>
		</div>
	)
}
