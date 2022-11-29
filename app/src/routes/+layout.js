// import { sessionUser } from '$lib/store/stores.js';

import { browser } from '$app/environment';
browser &&
	localStorage.getItem('session_user') === null &&
	localStorage.setItem('session_user', crypto.randomUUID());
// sessionUser.update(() => browser && localStorage.getItem('session_user'));

// console.log(browser && localStorage.getItem('session_user'));

import { contentCatalog } from '$lib/data/catalog/index';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	// const test = localStorage.getItem('session_user');
	// sessionUser.update(() => browser && localStorage.getItem('session_user'));

	return { contentCatalog };
}
