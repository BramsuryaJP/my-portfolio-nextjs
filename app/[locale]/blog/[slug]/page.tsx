'use client'

import { getBlogListBySlug } from '@/api/Blog'
import { useFormatter } from 'next-intl'
import MdxContent from '@/components/MdxContent'
import { useEffect, useState } from 'react'

interface BlogData {
	published_at: string
	title: string
	body_markdown: string
	tags: []
	reading_time_minutes: number
}

export default function DetailBlog({ params }: { params: { slug: string } }) {
	const devToUsername = 'bramsuryajp'
	const [blogData, setBlogData] = useState<BlogData | null>(null)

	useEffect(() => {
		const fetchBlogList = async () => {
			const data = await getBlogListBySlug(devToUsername, params.slug)
			setBlogData(data)
		}

		fetchBlogList()
	}, [])

	const format = useFormatter()

	if (blogData) {
		const formattedDate = format.dateTime(new Date(blogData.published_at), {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		})

		return (
			<div className='w-full flex justify-center p-4'>
				<div
					className='w-full max-w-4xl my-0 sm:my-10 lg:my-20 p-10 bg-gray-100
          dark:bg-white/10 rounded-2xl border border-black/5'
				>
					<div className='mb-10'>
						<div className='flex flex-row gap-5 justify-between mb-5'>
							<p className='text-sm font-medium'>{formattedDate}</p>
							<p className='text-xs flex flex-row items-center gap-1 sm:hidden'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-5'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
									/>
								</svg>
								{blogData.reading_time_minutes} min read
							</p>
						</div>
						<h1 className='text-4xl font-bold mb-5'>{blogData.title}</h1>
						<div className='flex items-center justify-between'>
							<div className='flex flex-wrap w-fit gap-1'>
								{blogData.tags.map((tag, index) => (
									<div
										key={index}
										className='mt-1 flex items-center justify-center bg-gray-100 border 
                    border-black/5 dark:bg-white/10 dark:text-white px-2 py-1 rounded-full'
									>
										<p className='text-xs'>#{tag}</p>
									</div>
								))}
							</div>
							<p className='hidden text-xs sm:flex flex-row items-center gap-1'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-5'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
									/>
								</svg>
								{blogData.reading_time_minutes} min read
							</p>
						</div>
					</div>

					<MdxContent markdown={blogData.body_markdown} />
				</div>
			</div>
		)
	} else {
		return <div className='w-full p-4'>Loading...</div>
	}
}
