<script>
	/** @type {import('./$types').PageData} */
	import Post from '$lib/components/post/index.svelte';
	export let data;
</script>

<svelte:head>
	<title>"Орбита-Строй" | Сухие строительные смеси</title>
	<meta
		name="description"
		content="Сухие строительные смеси для всех этапов работ. Штукатурные, шпаклёвочные, клеевые составы – выбор и применение."
	/>
</svelte:head>

<Post {...data.contentPost.post} />
