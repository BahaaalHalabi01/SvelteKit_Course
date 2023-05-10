import { json } from "@sveltejs/kit";
import type { RequestHandler } from './$types'

export const GET: RequestHandler = (event) => {

    return new Response('hello', {
        status: 418,
        headers: {
            test: 'hello world'
        }
    })
}

export const POST: RequestHandler = async (event) => {
    const data = await event.request.formData()
    const email = data.get('email')

    console.log(email)

    return new Response(
        JSON.stringify({
            success: true
        }), {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    )
}

