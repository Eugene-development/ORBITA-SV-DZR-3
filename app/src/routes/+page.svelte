<script>
	import MonthProduct from '$lib/components/monthProduct/index.svelte';
	import Slider from '$lib/components/slider/index.svelte';
	import Actual from '$lib/components/actual/index.svelte';
	import Testimonials from '$lib/components/testimonials/index.svelte';
	import Message from '$lib/components/message/index.svelte';
	import Article from '$lib/components/article/index.svelte';


	import { browser } from '$app/environment';

	browser && console.log(localStorage.getItem('session_user'))
	// import { browser, building, dev, version } from '$app/environment';

	// const uuid = crypto.randomUUID();
	// localStorage.setItem('dataS', uuid);
	// if ( localStorage.getItem('dataS') === null) {
	// 	localStorage.setItem('dataS', uuid);
	// }
	// console.log(uuid);

	// export let data
</script>

<!-- {#each data.data.test888.rubric as {value}}
    {value}
{/each} -->

<MonthProduct />
<Actual />
<Slider />
<Testimonials />
<Message />
<Article />
