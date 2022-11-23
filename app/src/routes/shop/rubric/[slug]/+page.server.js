/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { slug } = params;
	console.log(slug);
	return { slug };
}
