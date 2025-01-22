<script>
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
	export let dataSlider;
	const id = dataSlider.id;
</script>

<!-- <div class="my-12 text-center text-base">
	<div>
		<h2 class="text-base font-semibold uppercase tracking-wide text-cyan-600">акция</h2>
		<h3 class="mt-2 text-4xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-5xl">
			Товар месяца
		</h3>
	</div>
</div> -->
<div class="relative mt-2 overflow-hidden bg-white border-t-8 border-gray-200 ">
	<div class=" mx-auto max-w-full">
		<div
			class="pl-2 lg:pl-8 relative z-10 bg-gray-200 pb-8 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-16 lg:w-full lg:max-w-3xl "
		>
			<svg
				class="absolute inset-y-0 right-0 hidden h-full w-40 translate-x-1/2 transform text-white lg:block"
				fill="currentColor"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<polygon points="50,0 100,0 50,100 0,100" />
			</svg>

			<div>
				<div class="relative px-4 pt-2 sm:px-6 lg:px-8" />
			</div>

			<main class="mx-auto mt-10 max-w-7xl px-4 lg:px-8 sm:mt-8 sm:px-6 md:mt-10 lg:mt-6 xl:mt-12 ">
				<div class="sm:text-center lg:text-left">
					<span class="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-2xl">
						<span class="block xl:inline">{dataSlider.action}</span> <br />
						<!-- <span class="block text-cyan-700 xl:inline">{dataSlider.brand}</span> -->
					</span>
					<p
						class="mt-3 text-sm text-gray-700 sm:mx-auto sm:mt-2 sm:max-w-xl sm:text-base md:mt-2 lg:mx-0"
					>
						<strong
							>Цена - {dataSlider.price} руб.{#if id === '200'}/м<sup>3</sup>{/if}</strong
						>
						<!-- со скидкой -->
						<!-- <strong>{Math.round(dataSlider.price)} руб.</strong> со скидкой -->
						<!-- <strong>{Math.round(dataSlider.price - dataSlider.price * 0.1)} р/шт</strong> со скидкой -->
						<!-- Цена <strong>{Math.round(dataSlider.price - dataSlider.price * 0.05)} р/шт</strong> со скидкой -->
						<!-- 5% через наш строительный интернет магазин -->
					</p>
					<!-- <p
						class="mt-3 text-base text-gray-700 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
					>
						Цена <strong>{Math.round(dataSlider.price - dataSlider.price * 0.05)} р/шт</strong> со скидкой
						5% при заказе на сайте
					</p> -->
					<!-- <p
						class="mt-3 text-base text-gray-700 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
					>
						Цвет штукатурки - белый.
					</p> -->
					<!-- <p
						class="mt-3 text-base text-gray-700 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
					>
						Уточняйте количество на складе.
					</p> -->
					<div class="mt-2 sm:mt-4 sm:flex sm:justify-center lg:justify-start">
						{#if browser && !InCart.some((arrVal) => id === arrVal)}
							<div class="rounded-md shadow">
								<button
									on:click|preventDefault|once={() => sendToCart(id)}
									type="button"
									class="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-700 px-8 py-1 text-base font-medium text-white hover:bg-cyan-800  md:px-10 md:text-lg"
									>В корзину</button
								>
							</div>
						{:else}
							<div class="rounded-md shadow">
								<div
									class="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-800 px-8 py-1 text-base font-medium text-white hover:bg-cyan-700  md:px-10 md:text-lg"
								>
									В корзине
								</div>
							</div>
						{/if}
						<div class="mt-3 sm:mt-0 sm:ml-3">
							<a
								href={dataSlider.link}
								class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-1 text-base font-medium text-cyan-900 hover:bg-cyan-200 md:px-10 md:text-lg"
								>Подробнее</a
							>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
	<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
		<img
			class="pt-0.5 h-56 w-full object-contain sm:h-56 md:h-72 lg:h-full lg:w-full hidden xl:block"
			src={dataSlider.img}
			alt={dataSlider.action}
		/>
		<!-- <img
			class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
			src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
			alt=""
		/> -->
	</div>
</div>
