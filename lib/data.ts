import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import obsesiImg from '@/public/obsesi.jpeg'
import nawaImg from '@/public/nawa.jpeg'
import voxImg from '@/public/vox.jpeg'
import halalinImg from '@/public/halalin.png'

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const

export const experiencesData = [
	{
		title: 'Internship',
		location: 'Indonesia, West Bandung',
		description:
			"I follow internship for 4 months, I'm doing an intern there as a Front-end Developer",
		icon: React.createElement(LuGraduationCap),
		date: '2021',
	},
	{
		title: 'Bootcamp',
		location: 'Indonesia, Bandung',
		description:
			'After graduated from high school, I followed one of my current company i worked on bootcamp for 2 months. The bootcamp tought me about Backend and the language i use is Express.js',
		icon: React.createElement(CgWorkAlt),
		date: '2022',
	},
	{
		title: 'Front-End Developer',
		location: 'Indonesia, Bandung',
		description:
			'Sometimes i become a Back-End Developer on my current job, but my main is Front-End Developer and my stack is Next.JS and Nuxt.JS with Tailwind or Bootstrap as the Styling',
		icon: React.createElement(FaReact),
		date: '2022 - present',
	},
] as const

export const projectsData = [
	{
		title: 'Obsesi',
		description:
			'I worked as a front-end developer on this freelance project for 2 weeks. Users can mint nft based on what they want.',
		tags: ['React', 'Vite', 'Bootstrap'],
		imageUrl: obsesiImg,
	},
	{
		title: 'Nawa',
		description:
			'Same as Obsesi, i worked as a front-end developer on this freelance project for 2 weeks. Users also can mint nft based on what they want',
		tags: ['React', 'Next.js', 'Tailwind'],
		imageUrl: nawaImg,
	},
	{
		title: 'Vox3',
		description:
			'i worked as a front-end developer on this freelance project for 2 weeks. Its a landing page web app having a quick contact us.',
		tags: ['React', 'Next.js', 'Tailwind'],
		imageUrl: voxImg,
	},
	{
		title: 'Halalin',
		description:
			'i worked as a front-end developer on this freelance project for 2 months. It having a landing page and learning management system.',
		tags: ['Vue', 'Nuxt.js', 'Tailwind'],
		imageUrl: halalinImg,
	},
] as const

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Vue',
	'Nuxt.js',
	'Node.js',
	'Git',
	'Tailwind',
	'Bootstrap',
	'Material UI',
	'PostgreSQL',
	'Redux',
	'Express',
	'Framer Motion',
] as const
