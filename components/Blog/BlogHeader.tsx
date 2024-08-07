'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BlogLinks } from '@/lib/data'
import clsx from 'clsx'
import { Link, usePathname } from '@/navigation'
import { useGoogleAnalytics } from '@/lib/hooks'

export default function BlogHeader() {
	const pathname = usePathname()
	const { trackEvent } = useGoogleAnalytics()

	return (
		<header className='z-[999] relative'>
			<motion.div
				className='fixed top-0 left-1/2 h-[3.25rem] w-full sm:w-[11rem] rounded-none border border-opacity-40 
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 
        sm:rounded-full dark:bg-gray-950 dark:bg-opacity-75 dark:border-black/40'
				initial={{
					y: -100,
					x: '-50%',
					opacity: 0,
				}}
				animate={{ y: 0, x: '-50%', opacity: 1 }}
			></motion.div>
			<nav
				className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] 
      sm:py-0'
			>
				<ul
					className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium
        text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'
				>
					{BlogLinks.map((link) => (
						<motion.li
							key={link.hash}
							className='h-3/4 flex items-center justify-center relative'
							initial={{
								y: -100,
								opacity: 0,
							}}
							animate={{ y: 0, opacity: 1 }}
						>
							<Link
								href={link.hash}
								className={clsx(
									'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300 transition',
									{
										'text-gray-950 dark:!text-gray-300': pathname === link.hash,
									},
								)}
								onClick={() =>
									trackEvent('click', 'blog_navigation', link.name)
								}
							>
								{link.name}

								{link.hash === pathname && (
									<motion.span
										className='rounded-full -z-10 bg-gray-100 dark:bg-gray-800 absolute inset-0'
										layoutId='activePage'
										initial={{
											y: 0,
											opacity: 0,
										}}
										animate={{ y: 0, opacity: 1 }}
									></motion.span>
								)}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	)
}
