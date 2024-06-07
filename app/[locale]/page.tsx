import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import SectionDivider from '@/components/SectionDivider'
import Skills from '@/components/Skills'

export default function Home() {
	return (
		<main className='flex flex-col items-center px-4 scroll-mt-28'>
			<Intro />
			<SectionDivider />
			<About />
			<Projects />
			<Skills />
			<Experience />
			<Contact />
			<Footer />
		</main>
	)
}