<script lang="ts" >
	import type { PageData } from './$types'
	export let data: PageData
</script>

<div class="m-auto text-center">
	<ul class="h-auto text-center">
		{#each data.guides as guide}
			<li class="my-4 p-4 border-2 border-solid border-black min-w-min m-auto text-start underline">
				<a data-sveltekit-preload-data href={`/guides/${guide.id}`}>{guide.title}</a>
			</li>
		{/each}
	</ul>
</div>
