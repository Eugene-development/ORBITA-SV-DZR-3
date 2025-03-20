<script>
	import MonthProduct from '$lib/components/monthProduct/index.svelte';
	import ActionProduct from '$lib/components/actionProduct/index.svelte';
	import Actual from '$lib/components/actual/index.svelte';
	import Testimonials from '$lib/components/testimonials/index.svelte';
	import Message from '$lib/components/message/index.svelte';
	import Article from '$lib/components/article/index.svelte';
	import Holiday from '$lib/components/holiday/index.svelte';

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
		>Стройматериалы в Дзержинске | Купите строительные материалы в интернет-магазине в Дзержинске
		"Орбита-строй"</title
	>
	<meta
		name="description"
		content="База Орбита Строй это качественные стройматериалы в Дзержинске. Наш интернет магазин стройматериалов в Дзержинске предложит вам широчайший ассортимент и низкие цены на продукцию и комплектующие. Есть стройбаза со складом в черте города. Если Вы за городом, то можете купить стройматериалы с доставкой по Дзержинску."
	/>
</svelte:head>
<Holiday />

<section class="py-4 lg:py-8">
	<div class="grid max-w-full px-4 lg:px-12 xl:px-12 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
		<div class="mr-auto place-self-center lg:col-span-4">
			<div class="lg:flex">
				<div class="px-6 py-2 rounded-xl bg-gray-50 mt-2">
					<!-- <h2
						class="max-w-7xl mb-4 font-bold tracking-tight leading-none text-3xl md:text-5xl xl:text-7xl dark:text-green-600"
					>
						Весь МАЙ
					</h2> -->
					<p class="pb-3 font-extrabold text-red-600 lg:my-4 text-3xl sm:text-4xl xl:text-4xl">
						Акция!!!
					</p>
					<p class=" pb-3 font-extrabold text-green-700 lg:my-4 text-3xl sm:text-4xl xl:text-4xl">
						Март!!!
					</p>
					<p
						class="font-extrabold text-cyan-700 lg:my-4 text-3xl sm:text-4xl xl:text-4xl whitespace-nowrap"
					>
						Сантехника -15%
					</p>
					<!-- <p
						class="max-w-3xl font-light text-gray-600 lg:my-8 text-sm md:text-base xl:text-lg dark:text-gray-500"
					>
						Предлагаем приобрести продукцию производителя UNIS на нашей базе стройматериалов по
						специальной цене. Телефон вашего менеджера <span class="text-green-600 font-bold"
							>8 (902) 303-36-54</span
						>
					</p> -->

					<!-- {#if browser && !InCart.some((arrVal) => '431' === arrVal)}
						<div class="mt-4 md:mt-0">
							<button
								on:click|preventDefault|once={() => sendToCart('431')}
								class="inline-flex rounded-md bg-gray-600 px-16 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
								>В корзину</button
							>
						</div>
					{:else}
						<div class="mt-4 md:mt-0">
							<button
								class="inline-flex rounded-md px-16 py-2.5 text-sm font-semibold text-white shadow-sm bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
								>В корзине</button
							>
						</div>
					{/if} -->
				</div>

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
			</div>

			<!-- <p
				class="max-w-4xl mb-6 font-light text-gray-600 lg:my-8 md:text-lg lg:text-lg dark:text-gray-500"
			>
				Отзывчивость к нашим клиентам и стремление быть максимально клиентоориентированными
				подтолкнули нас к решению продлить акцию. Теперь вы можете воспользоваться <span
					class="text-red-800">скидкой в 5 процентов</span
				> не только посетив нашу базу строительных материалов, но и делая заказы через наш интернет-магазин
				стройматериалов до 31 марта 2024 года.
			</p> -->
		</div>
		<div class="lg:ml-8 lg:col-span-4">
			<img
				class="h-48 lg:h-64"
				src="https://www.knauf.ru/upload/iblock/09c/xixblbnsiva2zlg7yenuc21iido7l53k/Rotband_30_1200x900_1.png"
				alt="Стройматериалы по акции"
			/>
		</div>
		<!-- <div class="lg:col-span-3">
			<img
				class="h-48 lg:h-80"
				src="https://vetonit.com/sites/default/files/styles/product_zoom/public/uploads/pim/images/16428/66ef7a12-6517-11ef-a518-e659bb18163c.png?itok=8W_IIcgD"
				alt="Стройматериалы по акции"
			/>
		</div> -->
		<div class="pl-2 lg:mt-0 lg:col-span-4 ">
			<!-- <img
				class="h-80"
				src="https://www.knauf.ru/upload/iblock/09c/xixblbnsiva2zlg7yenuc21iido7l53k/Rotband_30_1200x900_1.png"
				alt="скидка"
			/> -->
			<img
				class="h-48 lg:h-64"
				src="https://storage.yandexcloud.net/orbita/actions/action2025-03.jpeg"
				alt="скидка"
			/>
			<!-- <img class="" src="https://utepliteli-77.ru/files/brands/unis-logo.png" alt="скидка" /> -->
			<!-- <img
				class=""
				src="https://storage.yandexcloud.net/orbita/actions/-TG40-458-30-09-03-2024%20(1).png"
				alt="скидка"
			/> -->
			<!-- <img
				class="h-96"
				src="https://storage.yandexcloud.net/orbita/actions/37520-1000x1000%20(1).jpg"
				alt="скидка"
			/> -->
			<!-- <img
				class=""
				src="https://avatars.mds.yandex.net/get-tycoon/742106/2a0000017cbcc1394a569016ca2347baf6b8/priority-promotion"
				alt="скидка"
			/> -->
		</div>
		<!-- <div class="hidden px-16 lg:mt-0 lg:col-span-5 lg:flex">
			<img
				src="https://ng-cosmetics.com/upload/iblock/cdf/n2rkpbujez41cs86sa8dtkimg33dfpf8/original_5bf3ee675c35980f8a337b64_5bf3eee504417.jpg"
				alt="скидка"
			/>
		</div> -->
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
<!-- <ActionProduct /> -->
<!-- <Hero /> -->
<!-- <Actual {...data.contentActions} /> -->
<Actual />
<!-- <MonthProduct /> -->x
<!-- <Slider /> -->
<Testimonials />
<Message />
<Article />
