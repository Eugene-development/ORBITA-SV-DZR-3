<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Применение ручного инструмента</title>
	<meta name="description" content="Информационный пост о применении ручного инструмента" />
</svelte:head>

<Post {...data.contentPost.post} />
