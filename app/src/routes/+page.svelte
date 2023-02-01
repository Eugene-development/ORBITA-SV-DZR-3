<script>
	import MonthProduct from '$lib/components/monthProduct/index.svelte';
	import Slider from '$lib/components/slider/index.svelte';
	import Actual from '$lib/components/actual/index.svelte';
	import Testimonials from '$lib/components/testimonials/index.svelte';
	import Message from '$lib/components/message/index.svelte';
	import Article from '$lib/components/article/index.svelte';
	import Hero from '$lib/components/header/hero/index.svelte';

	import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';

	import { contentActions } from '$lib/data/actions';

	console.log(contentActions);
	export let data;
</script>

<!-- {#each data.data.test888.rubric as {value}}
    {value}
{/each} -->

<svelte:head>
	<title>"Орбита-строй" | База строительных материалов в Дзержинске</title>
	<meta
		name="description"
		content="База строительных и отделочных материалов в Дзержинске с услугой доставки. Наш строительный интернет магазин предложит вам широчайший ассортимент и низкие цены на стройматериалы. Есть стройбаза со складом в черте города."
	/>
</svelte:head>

<Swiper
	modules={[Pagination, Scrollbar, A11y, Autoplay]}
	autoplay={{ delay: 6000 }}
	spaceBetween={40}
	pagination={{ clickable: true }}
	scrollbar={{ draggable: true, hide: true }}
>
	{#each contentActions.actions as dataSlider}
		<SwiperSlide><MonthProduct {dataSlider} /></SwiperSlide>
	{/each}
</Swiper>
<!-- <Hero /> -->
<Actual {...data.contentActions} />
<!-- <MonthProduct /> -->
<!-- <Slider /> -->
<Testimonials />
<Message />
<Article />
