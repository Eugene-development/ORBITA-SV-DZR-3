/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
	const { product } = data;
	return { product };
}
