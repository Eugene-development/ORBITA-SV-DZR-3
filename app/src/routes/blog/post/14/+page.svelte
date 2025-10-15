<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Напольные покрытия: как выбрать идеальный вариант</title>
	<meta
		name="description"
		content="Выбор напольного покрытия для каждой комнаты. Ламинат, линолеум, плитка, паркет – преимущества и особенности применения."
	/>
</svelte:head>

<Post {...data.contentPost.post} />
