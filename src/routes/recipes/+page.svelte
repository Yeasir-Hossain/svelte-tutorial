<script>
	/**
	 * @type {any}
	 */
	export let data;
	let recepies = data.results;
</script>

<h1>Food Recipes</h1>

{#each recepies as item}
	<div>
		<p>{item.title}</p>
		<img src={item.image} alt="" /> <br>
		<a href={`/recipe/${item.id}`}>
			<button> Details </button>
		</a>
	</div>
{/each}
