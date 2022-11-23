/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	console.log(params.slug);
	const { slug } = params;
	return { slug };
}
