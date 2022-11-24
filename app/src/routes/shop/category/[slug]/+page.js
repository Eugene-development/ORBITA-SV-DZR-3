/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
	const { rubric } = data;
	return { rubric };
}
