'use client'

import { useRouter } from '@/navigation'

export default function NotFound() {
	const router = useRouter()

	return (
		<div className='flex items-center justify-center h-dvh sm:h-screen'>
			<section>
				<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
					<div className='mx-auto max-w-screen-sm text-center'>
						<h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500'>
							404
						</h1>
						<p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>
							Something's missing.
						</p>
						<p className='mb-4 text-lg font-light text-gray-900 dark:text-white'>
							Sorry we couldn't find the page you were looking for
						</p>
						<button
							type='button'
							onClick={() => {
								router.back()
							}}
							className='bg-gray-100 dark:bg-white/10 border border-black/5 rounded-md inline-flex text-black dark:text-white bg-primary-600 font-medium text-sm px-5 py-2.5 text-center my-4'
						>
							Back
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}
