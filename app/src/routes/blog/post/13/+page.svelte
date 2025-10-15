<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Гидроизоляция: защита фундамента и подвала от влаги</title>
	<meta
		name="description"
		content="Правильная гидроизоляция – залог долговечности любого строения. Современные материалы и технологии защиты от влаги."
	/>
</svelte:head>

<Post {...data.contentPost.post} />
