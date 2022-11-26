/** @type {import('./$types').PageLoad} */
import { contentActions } from '$lib/data/actions';
export async function load() {
	return { contentActions };
}
