/** @type {import('./$types').PageLoad} */
import { browser } from '$app/environment';
import { pageH1, idProductsInCart } from '$lib/store/stores.js';

export async function load({ data }) {
	const { category } = data;
	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	pageH1.update(() => data.category.category_one.value);

	return { category, pathAWS };
}
