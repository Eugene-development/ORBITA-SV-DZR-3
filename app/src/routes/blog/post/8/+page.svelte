<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Шпаклёвка. Материалы и способы нанесения</title>
	<meta
		name="description"
		content="Подробное руководство по шпаклевке: виды материалов, техники нанесения, профессиональные советы и типичные ошибки в отделочных работах."
	/>
</svelte:head>

<Post {...data.contentPost.post} />
