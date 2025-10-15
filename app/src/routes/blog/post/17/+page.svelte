<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Системы отопления: радиаторы, трубы и комплектующие</title>
	<meta
		name="description"
		content="Выбор радиаторов отопления, труб и комплектующих. Алюминиевые, биметаллические, стальные радиаторы – особенности и применение."
	/>
</svelte:head>

<Post {...data.contentPost.post} />
