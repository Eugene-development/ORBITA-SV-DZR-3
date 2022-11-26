<script>
	/** @type {import('./$types').PageData} */
	import Actions from '$lib/components/actions/index.svelte';
	export let data;
</script>

<Actions {...data.contentActions} />
