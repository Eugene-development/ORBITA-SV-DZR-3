<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Краски и лакокрасочные материалы</title>
	<meta
		name="description"
		content="Выбор красок для внутренних и наружных работ. Водоэмульсионные, акриловые, алкидные краски – особенности и области применения."
	/>
</svelte:head>

<Post {...data.contentPost.post} />
