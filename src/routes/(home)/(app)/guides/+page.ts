import type { PageLoad } from './$types'
export const load = (async ({fetch}) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const newres = await fetch('/guides',{
        method:"GET"
    })

    const guides = await res.json()
    return {
        guides,
    }
}) satisfies PageLoad
