<script>
	let title = 'SvelteKit Beginner Tutorial'

	const updateTitle = () => {
		title = 'A Changed Title on Click'
	}
</script>

<div class="text-center m-auto">
	<h2 class="text-2xl font-bold my-4">{title}</h2>
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloremque omnis adipisci
		temporibus eos qui magnam aut unde officiis. Minus incidunt fugiat aliquam? Porro, facere itaque
		nulla excepturi illo corrupti.
	</p>
	<ul>
		<li><a href="/about">About Us</a></li>

		<li><a href="/guides">Guides</a></li>
	</ul>
	<button on:click={updateTitle} class="my-4">Change The Title</button>
	<input type="text" bind:value={title} class="border-solid border-black border-2 p-2" />
</div>
