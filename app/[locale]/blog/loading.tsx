import SectionHeading from '@/components/SectionHeading'

export default function loading() {
	return (
		<div className='flex flex-col items-center justify-center px-4 scroll-mt-28 pt-28 sm:pt-36 mb-20 sm:mb-28'>
			<SectionHeading>My Blogs</SectionHeading>
			<div className='max-w-5xl w-full grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{[...Array(4)].map((_, i) => (
					<section
						key={i}
						className='bg-gray-100 max-w-full border border-black/5 rounded-lg overflow-hidden 
            relative h-[18rem] sm:h-[22rem] transition flex dark:bg-white/10 dark:text-white'
					>
						<div className='p-5 relative w-full flex flex-col'>
							<div className='h-5 w-full bg-gray-200 dark:bg-white/10 rounded-lg'></div>
							<div className='mt-1 h-5 w-20 bg-gray-200 dark:bg-white/10 rounded-lg'></div>
							<div className='mt-4 h-16 w-full bg-gray-200 dark:bg-white/10 rounded-lg flex-1'></div>
							<div className='mt-5 h-10 w-full bg-gray-200 dark:bg-white/10 rounded-lg'></div>
						</div>
					</section>
				))}
			</div>
		</div>
	)
}
