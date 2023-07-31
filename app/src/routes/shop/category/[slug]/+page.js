/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { rubric } = data;
	const title =
		data.rubric.rubric_one.value +
		' по низкой цене от базы Орбита-Строй' +
		' | ' +
		data.rubric.rubric_one.value +
		' в Дзержинске со склада.';
	const description =
		data.rubric.rubric_one.value +
		' в Дзержинске и области. ' +
		'Доступная цена и постоянные акции. На нашем складе вас ждёт ' +
		data.rubric.rubric_one.value +
		' по низкой цене со скидками и с доставкой.';
	pageH1.update(() => data.rubric.rubric_one.value);

	return { title, description, rubric };
}
