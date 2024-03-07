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
</script>

<div class="relative bg-gray-800 my-12 md:my-24">
	<div
		class="hidden md:block relative pt-12 h-80 overflow-hidden bg-white md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2"
	>
		<img
			class="h-full w-full object-contain"
			src="https://storage.yandexcloud.net/orbita/actions/37520-1000x1000%20(1).jpg"
			alt="Стройматериалы по акции"
		/>
	</div>
	<div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-32">
		<div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
			<h2 class="text-base font-semibold leading-7 text-cyan-400">Предложение месяца</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
				Штукатурка ЕК TG 40
			</p>
			<p class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">458 руб/30кг</p>
			<p class="mt-6 text-base leading-7 text-gray-300">
				Предлагаем приобрести штукатурку гипсовую ЕК TG 40 на нашей базе стройматериалов по
				специальной цене.
			</p>
			{#if browser && !InCart.some((arrVal) => '431' === arrVal)}
				<div class="mt-8">
					<button
						on:click|preventDefault|once={() => sendToCart('431')}
						class="inline-flex rounded-md bg-white/10 px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>В корзину</button
					>
				</div>
			{:else}
				<div class="mt-8">
					<button
						class="inline-flex rounded-md px-8 py-2.5 text-sm font-semibold text-white shadow-sm bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>В корзине</button
					>
				</div>
			{/if}
		</div>
	</div>
</div>
