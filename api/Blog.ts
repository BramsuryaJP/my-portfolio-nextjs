import axios from 'axios'

export const getBlogList = async (username: string) => {
	const res = await axios.get(
		`https://dev.to/api/articles?username=${username}`,
	)
	return res.data
}

export const getBlogListBySlug = async (
	username: string,
	articleSlug: string,
) => {
	const res = await axios.get(
		`https://dev.to/api/articles/${username}/${articleSlug}`,
	)
	return res.data
}
