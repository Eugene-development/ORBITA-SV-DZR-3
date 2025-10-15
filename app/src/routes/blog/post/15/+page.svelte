<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Подготовка к зимнему строительству</title>
	<meta
		name="description"
		content="Особенности строительства в холодное время года. Технологии, материалы и экономическая выгода зимнего строительства."
	/>
</svelte:head>

<Post {...data.contentPost.post} />
