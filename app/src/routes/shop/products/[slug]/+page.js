/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { category } = data;
	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	return { category, pathAWS };
}
