<script lang="ts">
	import { page } from '$app/stores'
	import '$src/app.css'
	import Title from '$lib/Title.svelte'
	import Footer from '$lib/Footer.svelte'
	export let message = ''
	$page.error ? (message = $page.error.message) : (message = 'Unresolved Error')
</script>

<header class="bg-zinc-800 flex h-24  mb-8 items-center justify-center">
	<Title title="Halabi Gaming Broke!!" />
</header>

<main class="max-h-full h-100 max-w-7xl m-auto">
	<div class="m-auto text-4xl text-center">{$page.status}: {message}</div>
	<div class="m-auto text-4xl text-center mt-16 underline"><a href="/">Home Page</a></div>
</main>

<Footer />
