import type { PageLoad } from './$types'
export const load = (async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const guides = await res.json()
  return {
    guides
  }
}) satisfies PageLoad
