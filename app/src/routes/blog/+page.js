/** @type {import('./$types').PageLoad} */
import { contentBlog } from '$lib/data/blog';
export async function load() {
	// console.log(contentBlog);
	return { contentBlog };
}
