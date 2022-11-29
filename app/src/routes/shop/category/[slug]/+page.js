/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { rubric } = data;
	pageH1.update(() => data.rubric.rubric_one.value);

	return { rubric };
}
