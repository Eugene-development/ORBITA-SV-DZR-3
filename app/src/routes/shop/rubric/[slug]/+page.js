/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
	const { slug } = data;
	return { slug };
}
