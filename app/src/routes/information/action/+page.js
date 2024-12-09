/** @type {import('./$types').PageLoad} */
import { pageH1 } from '$lib/store/stores.js';

import { contentActions } from '$lib/data/actionsFactory';
export async function load() {
	pageH1.update(() => 'Наши акции');

	return { contentActions };
}
