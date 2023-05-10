<script lang="ts">

	import type { PageData } from './$types'
	export let data: PageData

	async function subscribe(event: Event) {
		const form = event.target as HTMLFormElement
		const data = new FormData(form)

		await fetch('/guides', {
			method: 'POST',
			body: data
		})
	}
</script>

<div>
	<h2>{data.guide.title}</h2>
</div>

<form on:submit|preventDefault={subscribe}>
	<input type="email" name="email" />
	<button>Subscribe</button>
</form>
