<script>
	import { each } from 'svelte/internal';

	// @ts-nocheck

	/**
	 * @type {{
		 instructions: any; id: any; title: any; image: any; extendedIngredients: any; error: any; 
}}
	 */
	export let data;
</script>

{#if data.id}
	<div>
		<h1>{data.title}</h1>
		<img src={data.image} alt={data.title} />
	</div>
	<div>
		<h2>Ingedients</h2>
		{#each data.extendedIngredients as ingredient}
			<p>{ingredient.original}</p>
		{/each}
	</div>
	<div>
		<h2>Instructions</h2>
		{data.instructions}
	</div>
{:else}
	<h1>{data.error}</h1>
{/if}
