import axios from 'axios'
import { cache } from 'react'

export const getBlogList = cache(async (username: string) => {
	const res = await axios.get(
		`https://dev.to/api/articles?username=${username}`,
	)
	return res.data
})

export const getBlogListBySlug = cache(
	async (username: string, articleSlug: string) => {
		const res = await axios.get(
			`https://dev.to/api/articles/${username}/${articleSlug}`,
		)
		return res.data
	},
)

export const getBlogComments = cache(async (articleId: string) => {
	const res = await axios.get(
		`https://dev.to/api/comments?a_id=${articleId}?sort=-created_at`,
	)
	return res.data
})
