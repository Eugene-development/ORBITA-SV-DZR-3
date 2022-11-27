/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
	const { product } = data;
	const pathAWS = import.meta.env.VITE_IMAGE_PRODUCTS;
	return { product, pathAWS };
}
