/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { product } = data;
	const title = data.product.product_one.value + ' в Дзержинске по низкой цене со склада.';
	const description =
		"У нас вы можете купить товар '" +
		data.product.product_one.value +
		"' по очень низкой цене. Есть услуга доставки по Дзержинску с грузчиками." +
		data.product.product_one.value +
		' в наличии на складе и под заказ. База стройматериалов работает по субботам и праздникам.';

	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	pageH1.update(() => data.product.product_one.value);

	return { title, description, product, pathAWS };
}
