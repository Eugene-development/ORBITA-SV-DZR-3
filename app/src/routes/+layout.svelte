<script>
    import "../app.css";
    import Banner from "$lib/components/banner/index.svelte"
    import Footer from "$lib/components/footer/index.svelte"
</script>

<Banner/>
<slot />
<Footer/>