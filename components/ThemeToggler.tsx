'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

export default function ThemeToggler() {
	const { systemTheme, theme, setTheme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

  const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<button
			className='fixed bottom-24 right-3  bg-white w-[3rem] h-[3rem] bg-opacity-80 z-10
    backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex 
    items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
			onClick={toggleTheme}
		>
			{currentTheme === 'light' ? <BsMoon /> : <BsSun />}
		</button>
	)
}
