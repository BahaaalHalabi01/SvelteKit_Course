<script>
	import '$src/app.css'
	import Title from '$lib/Title.svelte'
</script>

<header class="bg-zinc-800 py-4 mb-8" >
	<Title title="Halabi Gaming" />
</header>

<main class="max-h-full h-100">
	<slot />
</main>

<footer class=" text-center mt-auto">
	<p>
		CopyRight 2023, Made Using <a
			href="https://learn.svelte.dev"
			target="_blank"
			rel="noreferrer"
			class=" text-white">SvelteKit</a
		>
		with the help of
		<a href="https://youtube.com/@NetNinja" target="_blank" rel="noreferrer" class=" text-white"
			>The Net Ninja's</a
		> crash course.
	</p>
</footer>
