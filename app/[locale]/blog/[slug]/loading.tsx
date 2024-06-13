export default function loading() {
	return (
		<div className='w-full flex justify-center p-4'>
			<div
				className='w-full max-w-4xl my-0 sm:my-10 lg:my-20 p-10 bg-gray-100
dark:bg-white/10 rounded-2xl border border-black/5'
			>
				<div className=' animate-pulse'>
					<div className='flex flex-row gap-5 justify-between items-center mb-5'>
						<div className='h-5 w-52 bg-gray-200 dark:bg-white/10 rounded-lg'></div>
						<div className='h-5 w-40 bg-gray-200 dark:bg-white/10 rounded-lg sm:hidden'></div>
					</div>
					<div className='h-16 bg-gray-200 dark:bg-white/10 rounded-lg mb-5'></div>
					<div className='flex items-center justify-between'>
						<div className='h-5 w-60 bg-gray-200 dark:bg-white/10 rounded-lg'></div>
						<div className='h-5 w-40 bg-gray-200 dark:bg-white/10 rounded-lg'></div>
					</div>
					<div className='max-w-prose w-full mt-10'>
						<div className='h-48 bg-gray-200 dark:bg-white/10 rounded-lg'></div>
					</div>
				</div>
			</div>
		</div>
	)
}
