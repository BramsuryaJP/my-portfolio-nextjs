import About from '@/components/About'
import Blog from '@/components/Blog/index'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import SectionDivider from '@/components/SectionDivider'
import Skills from '@/components/Skills'

export default async function Home() {
	return (
		<>
			<Header />
			<main className='flex flex-col items-center px-4 scroll-mt-28 pt-28 sm:pt-36'>
				<Intro />
				<SectionDivider />
				<About />
				<Projects />
				<Blog />
				<Skills />
				<Experience />
				<Contact />
				<Footer />
			</main>
		</>
	)
}
