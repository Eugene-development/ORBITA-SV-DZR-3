/** @type {import('./$types').LayoutLoad} */
import { contentCatalog } from '$lib/data/catalog/index';
// Устанавливаем сессию юзера для корзины и записываем в стор
import { sessionUser } from '$lib/store/stores.js';
import { browser } from '$app/environment';
browser &&
	localStorage.getItem('session_user') === null &&
	localStorage.setItem('session_user', crypto.randomUUID());
browser && sessionUser.update(() => localStorage.getItem('session_user'));
// ---
export async function load() {
	return { contentCatalog };
}
