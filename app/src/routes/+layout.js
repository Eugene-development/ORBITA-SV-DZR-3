import { browser } from '$app/environment';
browser &&
	localStorage.getItem('dataS') === null &&
	localStorage.setItem('dataS', crypto.randomUUID());

import { contentCatalog } from '$lib/data/catalog/index';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	return { contentCatalog };
}
