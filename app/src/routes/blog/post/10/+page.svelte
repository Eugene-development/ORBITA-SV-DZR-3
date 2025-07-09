<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Электротовары: выбор, монтаж и безопасность</title>
	<meta
		name="description"
		content="Руководство по выбору электротоваров: кабели, автоматы, УЗО, розетки, выключатели. Правила монтажа, безопасность и современные тенденции."
	/>
</svelte:head>

<Post {...data.contentPost.post} />
