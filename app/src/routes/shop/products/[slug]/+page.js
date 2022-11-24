/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
	const { category } = data;
	return { category };
}
