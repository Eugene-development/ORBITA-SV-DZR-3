<script>
    /** @type {import('./$types').PageData} */
    import Blog from '$lib/components/blog/index.svelte';
    export let data;
    // console.log(data);
</script>

<Blog {...data.contentBlog.content}/>