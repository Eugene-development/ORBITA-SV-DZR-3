/** @type {import('./$types').PageLoad} */
import { browser } from '$app/environment';
import { pageH1, idProductsInCart } from '$lib/store/stores.js';

export async function load({ data }) {
	const { category } = data;
	const title =
		data.category.category_one.value +
		' по ценам ниже конкурентов. Купите товар "' +
		data.category.category_one.value +
		'" в Дзержинске с нашего склада.';
	const description =
		data.category.category_one.value +
		' по привлекательной цене оптом и в розницу. Данный товар ' +
		data.category.category_one.value +
		' можно купить на нашем сайте или напрямую со склада. Актуальная акция: ' +
		data.category.category_one.value +
		' в Дзержинске с доставкой до объекта.';
	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	// pageH1.update(() => data.category.category_one.value);

	return { title, description, category, pathAWS };
}
