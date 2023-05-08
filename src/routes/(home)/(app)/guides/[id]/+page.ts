import type { PageLoad } from './$types'
export const load = (async ({ fetch, params }) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
	const guide = await res.json()

	return {
		guide
	}
}) satisfies PageLoad
