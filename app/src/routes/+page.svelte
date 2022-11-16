


<script>



	export let data
    // console.log(data.data.test888);

</script>

<h1>Welcome to SvelteKit</h1>
<p class="text-red-800">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


{#each data.data.test888.rubric as {value}}
    {value}
{/each}