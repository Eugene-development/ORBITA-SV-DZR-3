/** @type {import('./$types').PageServerLoad} */
import { request, gql } from 'graphql-request';

export async function load({ params }) {
	const query = gql`
		query all_rubric {
			rubric {
				id
				value
			}
		}
	`;

	const rubric = await request('https://gost-remont.com/graphql/', query);
	if (rubric) return { rubric };

	// const { slug } = params;
	// console.log(slug);
	return { rubric };
}
