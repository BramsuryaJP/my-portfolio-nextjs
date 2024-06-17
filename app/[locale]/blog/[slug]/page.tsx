import { getBlogComments, getBlogListBySlug } from '@/api/Blog'
import BlogDetail from '@/components/Blog/DetailPage/BlogDetail'
import { notFound } from 'next/navigation'

export const revalidate = 300

export default async function DetailBlog({
	params,
}: {
	params: { slug: string }
}) {
	const devToUsername = 'bramsuryajp'

	await new Promise((resolve) => setTimeout(resolve, 2000))

	const blogResponse = await getBlogListBySlug(devToUsername, params.slug)

	const blogData = await blogResponse

	const commentResponse = await getBlogComments(blogData.id)

	const commentData = await commentResponse

	if (blogData.status === 404 && commentData.status === 404) {
		notFound()
	}

	return <BlogDetail blogData={blogData} commentData={commentData} />
}
