/** @type {import('./$types').PageLoad} */
import { browser } from '$app/environment';
import { pageH1, prodInCart } from '$lib/store/stores.js';
import { reject, without, pullAllBy, forEach, find, filter } from 'lodash';
// import { idProductsInCart } from '$lib/store/stores.js';

export async function load({ data }) {
	const { allProducts } = data;
	const idProductsInCart = browser && JSON.parse(localStorage.getItem('inCart'));
	let productsInCart = [];
	forEach(idProductsInCart, function (product) {
		productsInCart = [...productsInCart, find(allProducts.product, ['id', product])];
	});
	forEach(productsInCart, function (item) {
		item.quantity = 1;
	});

	prodInCart.update(() => productsInCart);
	pageH1.update(() => 'Корзина');

	return {};
}
