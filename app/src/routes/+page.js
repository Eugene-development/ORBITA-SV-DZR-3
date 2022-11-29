/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

export async function load({ data }) {
	pageH1.update(() => 'База строительных материалов');

	return { data, pageH1 };
}
