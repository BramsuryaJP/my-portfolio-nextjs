import { motion, useAnimation } from 'framer-motion'
import { Link } from '@/navigation'

interface Blog {
	id: number
	title: string
	tag_list: string[]
	description: string
	// include other properties as needed
}

interface BlogCardProps {
	blogList: Blog
}

export default function BlogCard({ blogList }: BlogCardProps) {
	const buttonVariants = {
		hidden: { opacity: 0, y: -1 },
		visible: { opacity: 1 },
		exit: { opacity: 0, y: 0 },
	}

	const control = useAnimation()

	return (
		<motion.div
			key={blogList.id}
			className='group'
			onMouseEnter={() => control.start('visible')}
			onMouseLeave={() => control.start('hidden')}
		>
			<section
				className='bg-gray-100 max-w-[20rem] border border-black/5 rounded-lg overflow-hidden 
relative sm:h-[22rem] transition flex dark:bg-white/10 dark:text-white'
			>
				<div className='p-5 relative w-full'>
					<h3 className='text-lg font-semibold'>{blogList.title}</h3>
					<div className='flex flex-wrap w-full gap-1'>
						{blogList.tag_list.map((tag, index) => (
							<div
								key={index}
								className='mt-1 flex items-center justify-center bg-gray-100 border border-black/5 dark:bg-white/10 dark:text-white px-2 py-1 rounded-full'
							>
								<p className='text-xs'>#{tag}</p>
							</div>
						))}
					</div>
					<p className='mt-4 leading-relaxed text-gray-700 dark:text-white/70'>
						{blogList.description}
					</p>
					<Link
						href={{
							pathname: '/blog/[blogId]',
							params: { blogId: blogList.id },
						}}
						className='hidden xl:block'
					>
						<motion.button
							className='p-2 border border-black/20 dark:border-white/80 transition duration-200 hover:shadow-[0_0_5px_0_rgba(0,0,0,1)] dark:hover:shadow-[0_0_5px_0_rgba(255,255,255,1)] absolute bottom-5 right-5 rounded-xl text-sm'
							variants={buttonVariants}
							initial='hidden'
							animate={control}
							whileHover={{
								scale: 1.1,
							}}
						>
							Read More
						</motion.button>
					</Link>
					<Link
						href={{
							pathname: '/blog/[blogId]',
							params: { blogId: blogList.id },
						}}
						className='xl:hidden'
					>
						<button className='p-2 mt-5 w-full border border-black/20 dark:border-white/80 transition duration-200 hover:shadow-[0_0_5px_0_rgba(0,0,0,1)] dark:hover:shadow-[0_0_5px_0_rgba(255,255,255,1)] rounded-xl text-sm'>
							Read More
						</button>
					</Link>
				</div>
			</section>
		</motion.div>
	)
}
