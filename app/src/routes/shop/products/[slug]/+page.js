/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { category } = data;
	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	pageH1.update(() => data.category.category_one.value);

	return { category, pathAWS };
}
