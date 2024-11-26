/** @type {import('./$types').PageLoad} */
// import { pageH1 } from '$lib/store/stores.js';

import { contentPost } from '$lib/data/blog/post/3';
export async function load() {
	// pageH1.update(() => 'Пост блога');

	// let number = 0;
	// const func = () => {
	// 	return number++;
	// };

	// console.log(func());
	// console.log(func());
	// console.log(func());
	// console.log(func());
	// console.log(func());

	// const arr = [1, 10, 3, 5, 9, 6, 7, 8];

	// console.log(arr.sort((a, b) => b - a));

	return { contentPost };
}
