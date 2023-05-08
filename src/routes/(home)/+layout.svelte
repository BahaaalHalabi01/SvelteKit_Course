<script>
	import '$src/app.css'
	import Title from '$lib/Title.svelte'
	import Footer from '$lib/Footer.svelte'
</script>

<header class="bg-zinc-800 flex h-24  mb-8 items-center justify-center">
	<Title title="Halabi Gaming" />
</header>

<main class="max-h-full h-100 max-w-7xl m-auto">
	<slot />
</main>

<Footer />
