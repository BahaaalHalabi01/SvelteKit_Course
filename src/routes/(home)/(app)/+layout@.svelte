<script>
	import '$src/app.css'
	import Title from '$lib/Title.svelte'
	import Footer from '$lib/Footer.svelte'
</script>

<header class="bg-zinc-800 py-4 mb-8 h-24 flex items-center">
	<nav class="text-center flex justify-between items-center w-full h-max">
		<Title title="Halabi Gaming Guides" />
		<span class="mr-16">
			<a href="/" class="italic underline">Home</a>
			<a href="/about" class="italic underline">About Us</a>
			<a href="/guides" class="italic underline">Guides</a>
		</span>
	</nav>
</header>

<main class="max-h-full h-100 max-w-7xl m-auto">
	<slot />
</main>

<Footer />
