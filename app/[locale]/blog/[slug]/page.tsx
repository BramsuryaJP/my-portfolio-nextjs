import { getBlogComments, getBlogListBySlug } from '@/api/Blog'
import BlogDetail from '@/components/Blog/DetailPage/BlogDetail'

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

	return <BlogDetail blogData={blogData} commentData={commentData} />
}
