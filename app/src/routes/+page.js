/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';
import { browser } from '$app/environment';
const uuid = crypto.randomUUID();
browser && localStorage.setItem('dataS', uuid);

export async function load({ data }) {
	pageH1.update(() => 'База строительных материалов');

	return { data };
}
