import { getBlogList } from '@/api/Blog'
import BlogList from './BlogList'

export const revalidate = 300 // revalidate the data at most every hour

export default async function Blog() {
	const devToUsername = 'bramsuryajp'

	const response = await getBlogList(devToUsername)
	const data = await response

	return <BlogList blogListData={data} />
}
