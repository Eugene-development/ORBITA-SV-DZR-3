/** @type {import('./$types').PageLoad} */

import { contentPost } from '$lib/data/blog/post/5';
export async function load() {
	return { contentPost };
}
