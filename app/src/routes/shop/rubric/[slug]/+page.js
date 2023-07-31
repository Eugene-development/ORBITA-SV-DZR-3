/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { catalog } = data;
	const title =
		"База строительных материалов 'Орбита-Строй' | Купите товар " +
		data.catalog.catalog_one.value +
		' по низкой цене в Дзержинске';
	const description =
		data.catalog.catalog_one.value +
		' по низким ценам в Дзержинске и области. Предлагаем купить с доставкой и скидкой товар ' +
		data.catalog.catalog_one.value +
		'. Широкий ассортимент и качественное обслуживание.';

	pageH1.update(() => data.catalog.catalog_one.value);

	return { title, description, catalog };
}
