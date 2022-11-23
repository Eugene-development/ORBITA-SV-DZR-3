<script>
	import Top from '$lib/components/header/top/index.svelte';
	import Nav from '$lib/components/header/nav/index.svelte';
	import Hero from '$lib/components/header/hero/index.svelte';
	import Catalog from '$lib/components/header/catalog/index.svelte';

	export let catalog;
</script>

<header>
	<Top />
	<Nav />
	<Hero />
	<Catalog {catalog} />
	<!-- <Search /> -->
</header>
