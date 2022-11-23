<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data.catalog.catalog_one);
    const catalog = data.catalog.catalog_one
</script>

<p>{catalog}</p>