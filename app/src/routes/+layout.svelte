<script>
	import '../app.css';
	import MobileMenu from '$lib/components/mobile-menu/index.svelte';
	import Search from '$lib/components/search/index.svelte';
	import Banner from '$lib/components/banner/index.svelte';
	import Header from '$lib/components/header/index.svelte';
	import Footer from '$lib/components/footer/index.svelte';
	export let data;
	//TODO Нужно, чтобы удалённые товары не приводили к 500.
	import { browser } from '$app/environment';
	import { lengthCart } from '$lib/store/stores.js';
	browser && localStorage.removeItem('inCart');
	lengthCart.update(() => 0);
</script>

<MobileMenu />
<Search />

<Banner />
<Header {...data.contentCatalog} {...data.contentInformationMenu} />
<slot />
<Footer />
