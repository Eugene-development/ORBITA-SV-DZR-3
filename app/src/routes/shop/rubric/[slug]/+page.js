/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	const { catalog } = data;
	pageH1.update(() => data.catalog.catalog_one.value);

	return { catalog };
}
