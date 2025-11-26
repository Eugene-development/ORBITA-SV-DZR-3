<script>
	import MonthProduct from '$lib/components/monthProduct/index.svelte';
	import ActionProduct from '$lib/components/actionProduct/index.svelte';
	import Actual from '$lib/components/actual/index.svelte';
	import Testimonials from '$lib/components/testimonials/index.svelte';
	import Message from '$lib/components/message/index.svelte';
	import Article from '$lib/components/article/index.svelte';
	import Holiday from '$lib/components/holiday/index.svelte';
	import Tinting from '$lib/components/tinting/index.svelte';

	// Import Swiper
	import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { contentActions } from '$lib/data/actions';

	import { browser } from '$app/environment';
	import { lengthCart, idProductsInCart } from '$lib/store/stores.js';

	let InCart;
	idProductsInCart.subscribe((value) => (InCart = value));

	const sendToCart = async (id) => {
		if (browser && localStorage.getItem('inCart') === null) {
			browser && localStorage.setItem('inCart', JSON.stringify([id]));
		} else {
			const itemsCart = JSON.parse(localStorage.getItem('inCart'));
			const newItemsCart = [...itemsCart, id];
			localStorage.setItem('inCart', JSON.stringify(newItemsCart));
		}

		const productsInCart = JSON.parse(localStorage.getItem('inCart'));
		lengthCart.update(() => productsInCart.length);
		idProductsInCart.update(() => productsInCart);
	};
</script>

<!-- {#each data.data.test888.rubric as {value}}
    {value}
{/each} -->

<svelte:head>
	<title
		>Стройматериалы в Дзержинске | Купите стройматериалы в интернет-магазине в Дзержинске
		"Орбита-строй"</title
	>
	<meta
		name="description"
		content="База Орбита Строй это качественные стройматериалы в Дзержинске. Наш интернет магазин стройматериалов в Дзержинске предложит вам широчайший ассортимент и низкие цены на продукцию и комплектующие. Есть стройбаза со складом в черте города. Если Вы за городом, то можете купить стройматериалы с доставкой по Дзержинску."
	/>
</svelte:head>

<Holiday />

<Actual />

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

<Tinting />

<!-- <ActionProduct /> -->
<!-- <Hero /> -->
<!-- <Actual {...data.contentActions} /> -->
<!-- <MonthProduct /> -->
<!-- <Slider /> -->
<Testimonials />
<Message />
<Article />

<!-- СРЕДНЯЯ ЧАСТЬ -->
<!-- <div class="mx-auto">
					<img
						class="h-48 lg:h-72"
						src="https://baurex.ru/upload/resize_cache/600x600/bergauf/kley-montazhnyy-bergauf-isofix-25-kg_1.jpg"
						alt="Стройматериалы по акции"
					/>
				</div> -->
<!-- <div class="lg:pl-8 xl:pl-24">
					<img
						class="h-48 lg:h-72"
						src="https://www.knauf.ru/upload/iblock/09c/xixblbnsiva2zlg7yenuc21iido7l53k/Rotband_30_1200x900_1.png"
						alt="Стройматериалы по акции"
					/>
				</div> -->
<!-- <div class="hidden lg:block h-80 overflow-hidden ml-10">
					<img
						class="h-full w-full object-fill"
						src="https://storage.yandexcloud.net/orbita/actions/20210517_132652.jpg"
						alt="Стройматериалы по акции"
					/>
				</div> -->
<!-- <div class="hidden md:block h-80 overflow-hidden ">
					<img
						class="h-full w-full object-contain"
						src="https://utepliteli-77.ru/files/brands/unis-logo.png"
						alt="Стройматериалы по акции"
					/>
				</div> -->
<!-- <div class="hidden md:block h-80 overflow-hidden ">
					<img
						class="h-full w-full object-contain"
						src="https://storage.yandexcloud.net/orbita/actions/37520-1000x1000%20(1).jpg"
						alt="Стройматериалы по акции"
					/>
				</div> -->
<!-- <p
				class="max-w-4xl mb-6 font-light text-gray-600 lg:my-8 md:text-lg lg:text-lg dark:text-gray-500"
			>
				Отзывчивость к нашим клиентам и стремление быть максимально клиентоориентированными
				подтолкнули нас к решению продлить акцию. Теперь вы можете воспользоваться <span
					class="text-red-800">скидкой в 5 процентов</span
				> не только посетив нашу базу строительных материалов, но и делая заказы через наш интернет-магазин
				стройматериалов до 31 марта 2024 года.
			</p> -->
