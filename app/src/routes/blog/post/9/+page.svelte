<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Системы канализации: материалы и технологии монтажа</title>
	<meta
		name="description"
		content="Полное руководство по канализационным системам: виды труб, фитинги, трапы, технологии монтажа и типичные ошибки при установке."
	/>
</svelte:head>

<Post {...data.contentPost.post} />
