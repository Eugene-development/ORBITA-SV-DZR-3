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

	export let actions;
</script>

<div class="bg-white">
	<div class="mx-auto max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:max-w-full lg:px-8">
		<h2 class="py-2 text-5xl text-center font-bold tracking-tight text-gray-900">
			Актуальные товары по низким ценам
		</h2>
		<p class="py-2 text-xl text-center tracking-tight text-gray-900">
			При заказе через наш интернет магазин стройматериалов скидка 5%.
		</p>

		<div class="mt-8 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
			{#each actions as { id, action, price, description, link, img }}
				<div
					class="group rounded-md relative shadow-lg shadow-slate-400/50 p-3 border-2 transition ease-in-out hover:scale-105"
				>
					<div
						class="h-56 p-8 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none "
					>
						<img src={img} alt="" class="  object-contain " />
					</div>
					<div class="h-16 flex justify-between">
						<div>
							<h3 class="pl-2 text-xs text-gray-700">
								<span aria-hidden="true" class="inset-0" />
								{action}
							</h3>
						</div>
						<p class="ml-2 text-base font-medium text-gray-900">{price}р.</p>
					</div>
					{#if browser && !InCart.some((arrVal) => id === arrVal)}
						<button
							on:click|preventDefault|once={sendToCart(id)}
							type="button"
							class="mx-2 px-3 py-1 align-bottom rounded-md text-base text-gray-100 bg-cyan-600 hover:bg-cyan-700"
							>В корзину</button
						>
					{:else}
						<button
							class="mx-2 px-3 py-1 align-bottom rounded-md text-base text-gray-100 bg-cyan-800 hover:bg-cyan-700"
							>В корзине</button
						>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
