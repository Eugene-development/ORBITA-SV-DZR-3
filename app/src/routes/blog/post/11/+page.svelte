<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title
		>"Орбита-Строй" | Листовые материалы в строительстве: виды, характеристики и применение</title
	>
	<meta
		name="description"
		content="Полный обзор листовых строительных материалов: гипсокартон, ОСП, фанера, ДСП, ЦСП, металлические листы. Выбор, характеристики и правила монтажа."
	/>
</svelte:head>

<Post {...data.contentPost.post} />
