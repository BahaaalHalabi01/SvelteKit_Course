<script>
	let title = 'SvelteKit Beginner Tutorial';

	const updateTitle = () => {
		title = 'A Changed Title on Click';
	};
</script>

<div class="index">
	<h2>{title}</h2>
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloremque omnis adipisci
		temporibus eos qui magnam aut unde officiis. Minus incidunt fugiat aliquam? Porro, facere itaque
		nulla excepturi illo corrupti.
	</p>
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quod officiis veritatis
		accusamus cum. Modi, amet? Explicabo nostrum saepe molestiae ab ipsam inventore exercitationem,
		voluptatem neque tenetur nesciunt at architecto.
	</p>
	<button on:click={updateTitle}>Change The Title</button>
	<input type="text" bind:value={title}>
</div>

<style>
	.index {
		text-align: center;
		display: block;
		margin: auto;
	}
</style>
