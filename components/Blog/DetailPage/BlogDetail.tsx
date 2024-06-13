'use client'

import { useFormatter } from 'next-intl'
import MdxContent from '@/components/MdxContent'
import parse from 'html-react-parser'
import Image from 'next/image'
import { useRouter } from '@/navigation'

interface BlogData {
	id: string
	published_at: string
	title: string
	body_markdown: string
	tags: []
	reading_time_minutes: number
	comments_count: number
}

interface User {
	username: string
	profile_image_90: string
	name: string
}

interface Comment {
	id_code: string
	body_html: string
	user: User
	children?: Comment[]
	created_at: Date
}

type BlogDetailProps = {
	blogData: BlogData
	commentData: Comment[]
}

export default function BlogDetail({ blogData, commentData }: BlogDetailProps) {
	const router = useRouter()

	const format = useFormatter()

	const formattedDate = format.dateTime(new Date(blogData.published_at), {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

	const renderComments = (comments: Comment[]) => {
		return (
			<div className='flex flex-col gap-5'>
				{comments.map((comment: Comment, index: number) => (
					<div key={index} className='flex flex-col gap-5'>
						<div className='flex flex-row items-start gap-2'>
							<Image
								loading='lazy'
								width={36}
								height={36}
								alt={`user-${comment.user.username}-img`}
								src={comment.user.profile_image_90}
								className='rounded-full borderBlack'
							/>
							<div className='flex flex-col gap-2 p-4 borderBlack bg-white/80 dark:bg-gray-700 rounded-md text-base'>
								<div className='flex flex-row items-center gap-2'>
									<p className='text-sm font-medium'>{comment.user.name}</p>
									<div className='w-1 h-1 bg-gray-700 dark:bg-white/80 rounded-full hidden sm:block'></div>
									<p className='text-sm font-medium hidden sm:block'>
										{format.dateTime(new Date(comment.created_at), {
											year: 'numeric',
											month: 'long',
											day: 'numeric',
										})}
									</p>
								</div>
								{parse(comment.body_html)}
							</div>
						</div>
						{comment.children && comment.children.length > 0 && (
							<div className='ml-2 sm:ml-4'>
								{renderComments(comment.children)}
							</div>
						)}
					</div>
				))}
			</div>
		)
	}

	return (
		<div className='w-full flex flex-col items-center justify-center p-4'>
			<div className='my-0 sm:my-10 lg:my-20 flex flex-col gap-5'>
				<button
					onClick={() => {
						router.back()
					}}
					className='w-full flex justify-start'
				>
					Back
				</button>
				<div
					className='w-full max-w-4xl p-5 sm:p-10 bg-gray-100
      dark:bg-white/10 rounded-2xl border border-black/5'
				>
					<div className='mb-10'>
						<div className='flex flex-row gap-5 justify-between items-center mb-5'>
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
				<div
					className='w-full max-w-4xl mt-10 sm:mt-0 mb-0 sm:mb-10 lg:mb-20 p-5 sm:p-10 bg-gray-100
      dark:bg-white/10 rounded-2xl border border-black/5'
				>
					<div className='max-w-prose w-full'>
						<p className='text-2xl font-semibold mb-5'>
							Comments ({blogData.comments_count})
						</p>
						{renderComments(commentData)}
					</div>
				</div>
			</div>
		</div>
	)
}
