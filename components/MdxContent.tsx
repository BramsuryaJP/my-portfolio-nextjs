import Markdown from 'react-markdown'

interface Slug {
	markdown: string
	// include other properties as needed
}

export default function MdxContent({ markdown }: Slug) {
	const components = {
		a: ({ ...props }) => (
			<a {...props} target='_blank' rel='noopener noreferrer' />
		),
	}

	return (
		<div
			className='prose prose-img:rounded-xl prose-p:text-gray-700 dark:prose-p:text-white/80
    prose-strong:text-gray-700 dark:prose-strong:text-white/80
    prose-a:text-gray-700 dark:prose-a:text-white/80
    prose-code:text-gray-700 dark:prose-code:text-white/80
    prose-pre:bg-white/80 dark:prose-pre:bg-gray-700
    prose-li:marker:text-gray-700 dark:prose-li:marker:text-white/80
    text-gray-700 dark:text-white/80
    prose-pre:border prose-pre:border-black/5'
		>
			<Markdown components={components}>{markdown}</Markdown>
		</div>
	)
}
