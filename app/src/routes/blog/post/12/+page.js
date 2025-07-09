import { contentPost } from '$lib/data/blog/post/12/index.js';

export function load() {
	return {
		post: contentPost.post
	};
}
