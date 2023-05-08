<script>
	import '$src/app.css'
	import Title from '$lib/Title.svelte'
	import Footer from '$lib/Footer.svelte'
</script>

<header class="bg-zinc-800 py-4 mb-8" >
	<nav class="text-center">
		<Title title="Halabi Gaming Guides" />
		<a href="/" class="italic">Home</a>
		<a href="/about" class="italic">About Us</a>
		<a href="/guides" class="italic">Guides</a>
	</nav>
</header>

<main class="max-h-full h-100">
	<slot />
</main>

<Footer/>


