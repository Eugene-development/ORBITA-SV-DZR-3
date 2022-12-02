/** @type {import('./$types').LayoutLoad} */
import { contentCatalog } from '$lib/data/catalog/index';

// Устанавливаем сессию юзера, если её нет для корзины и записываем в стор //
import { sessionUser, lengthCart, idProductsInCart } from '$lib/store/stores.js';
import { browser } from '$app/environment';
browser &&
	localStorage.getItem('session_user') === null &&
	localStorage.setItem('session_user', crypto.randomUUID());
browser && sessionUser.update(() => localStorage.getItem('session_user'));

// --- //

// Фиксируем и считаем количество элементов в корзине при перезагрузке страницы и записываем в стор //
// browser &&
// 	localStorage.getItem('inCart') === null &&
// 	localStorage.setItem('inCart', JSON.stringify([]));
// const productsInCart = browser && localStorage.getItem('inCart');
// browser && idProductsInCart.update(() => productsInCart);
// const pic = productsInCart.length;
// browser && lengthCart.update(() => pic);
// --- //

export async function load() {
	return { contentCatalog };
}
