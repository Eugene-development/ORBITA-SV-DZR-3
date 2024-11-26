<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Подбор монтажной пены</title>
	<meta name="description" content="Информационный пост о подборе монтажной пены" />
</svelte:head>

<Post {...data.contentPost.post} />
