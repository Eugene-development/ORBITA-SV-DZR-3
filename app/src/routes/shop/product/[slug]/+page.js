/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { product } = data;
	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	pageH1.update(() => data.product.product_one.value);

	return { product, pathAWS };
}
