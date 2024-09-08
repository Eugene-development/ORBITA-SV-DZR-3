<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Выбор теплоизоляции</title>
	<meta name="description" content="Информационный пост о выборе теплоизоляции" />
</svelte:head>

<Post {...data.contentPost.post} />
