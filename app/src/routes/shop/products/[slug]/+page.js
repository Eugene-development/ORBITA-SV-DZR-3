/** @type {import('./$types').PageLoad} */
import { browser } from '$app/environment';
import { pageH1, idProductsInCart } from '$lib/store/stores.js';

export async function load({ data }) {
	const { category } = data;
	const title =
		data.category.category_one.value +
		' по выгодным ценам. Купите товар ' +
		data.category.category_one.value +
		' В Дзержинске со склада';
	const description =
		data.category.category_one.value +
		' оптом и в розницу по привлекательной цене. Данный товар можно купить на нашем сайте. ' +
		data.category.category_one.value +
		' в Дзержинске и регионе с доставкой.';
	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	// pageH1.update(() => data.category.category_one.value);

	return { title, description, category, pathAWS };
}
