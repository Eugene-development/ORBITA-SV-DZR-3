<script>
	import MonthProduct from '$lib/components/monthProduct/index.svelte';
	import Actual from '$lib/components/actual/index.svelte';
	import Testimonials from '$lib/components/testimonials/index.svelte';
	import Message from '$lib/components/message/index.svelte';
	import Article from '$lib/components/article/index.svelte';

	// Import Swiper
	import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { contentActions } from '$lib/data/actions';
</script>

<!-- {#each data.data.test888.rubric as {value}}
    {value}
{/each} -->

<svelte:head>
	<title
		>База строительных материалов в Дзержинске | Купите строительные материалы в интернет-магазине
		"Орбита-строй"</title
	>
	<meta
		name="description"
		content="База строительных и отделочных материалов в Дзержинске. Наш интернет магазин строительных и отделочных материалов предложит вам широчайший ассортимент и низкие цены на стройматериалы и комплектующие. Есть стройбаза со складом в черте города. Если Вы за городом, то можете купить стройматериалы с доставкой."
	/>
</svelte:head>

<section class="py-14">
	<div
		class="grid max-w-full px-2 lg:px-24 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-2  lg:grid-cols-12"
	>
		<div class="mr-auto place-self-center lg:col-span-7">
			<h2
				class="max-w-7xl mb-4 text-5xl font-bold tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-gray-800"
			>
				Весь февраль &#10052;
			</h2>
			<p
				class="max-w-3xl mb-6 font-light text-gray-500 lg:my-8 md:text-lg lg:text-xl dark:text-gray-400"
			>
				Отзывчивость к нашим клиентам и стремление быть максимально клиентоориентированными
				подтолкнули нас к решению продлить акцию. Теперь вы можете воспользоваться <span
					class="text-red-700">скидкой в 10 процентов</span
				> не только посетив нашу базу строительных материалов, но и делая заказы через наш интернет-магазин
				стройматериалов до 29 февраля 2024 года.
			</p>
		</div>
		<div class="hidden px-12 lg:mt-0 lg:col-span-5 lg:flex">
			<img
				src="https://ng-cosmetics.com/upload/iblock/cdf/n2rkpbujez41cs86sa8dtkimg33dfpf8/original_5bf3ee675c35980f8a337b64_5bf3eee504417.jpg"
				alt="скидка"
			/>
		</div>
	</div>
</section>

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
<!-- <Actual {...data.contentActions} /> -->
<Actual />
<!-- <MonthProduct /> -->
<!-- <Slider /> -->
<Testimonials />
<Message />
<Article />
