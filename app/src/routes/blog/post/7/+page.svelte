<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Секреты применения штукатурки</title>
	<meta
		name="description"
		content="Профессиональные секреты и техники применения штукатурки. Полезные советы для качественных отделочных работ."
	/>
</svelte:head>

<Post {...data.contentPost.post} />
