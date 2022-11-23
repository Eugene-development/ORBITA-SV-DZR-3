import { contentCatalog } from '$lib/data/catalog/index';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	return { contentCatalog };
}
