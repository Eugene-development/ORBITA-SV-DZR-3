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

	export let data;
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

<section class="">
	<div class="grid max-w-7xl px-2 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-2  lg:grid-cols-12">
		<div class="mr-auto place-self-center lg:col-span-7">
			<h2
				class="max-w-7xl mb-4 text-5xl font-bold tracking-tight leading-none md:text-5xl xl:text-8xl dark:text-gray-800"
			>
				Весь январь &#10052;
			</h2>
			<p
				class="max-w-2xl mb-6 font-light text-gray-500 lg:my-8 md:text-lg lg:text-xl dark:text-gray-400"
			>
				Наша зимняя акция для всех клиентов в Новом году!!! <br /> На весь ассортимент мы предлагаем
				скидку в 10 процентов до 31 января 2024 года. Ждём Вас на нашей базе стройматериалов.
			</p>
		</div>
		<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
			<img
				src="https://sun9-56.userapi.com/impg/3eRW2_q33QcgUlc6O5fC3sK5zByP_5AXx8YMlA/qA80LF2PevY.jpg?size=1280x768&quality=95&sign=4125bb4fd0c020a32584e87770139780&c_uniq_tag=Xk2TyJnFYVrY_Kbv15ejRNbdFrtziaiROy_zicPML0c&type=album"
				alt="mockup"
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
<Actual {...data.contentActions} />
<!-- <MonthProduct /> -->
<!-- <Slider /> -->
<Testimonials />
<Message />
<Article />
