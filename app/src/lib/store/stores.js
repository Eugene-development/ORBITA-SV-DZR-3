import { writable } from 'svelte/store';

export const visibleMobileMenu = writable(false);
export const visibleCatalog = writable(false);
export const banner = writable(true);

export const slideOne = writable(true);
export const slideTwo = writable(false);
export const slideThree = writable(false);
export const slideFour = writable(false);
