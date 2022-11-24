/** @type {import('./$types').PageLoad} */

export async function load({ data }) {
	const { catalog } = data;
	return { catalog };
}
