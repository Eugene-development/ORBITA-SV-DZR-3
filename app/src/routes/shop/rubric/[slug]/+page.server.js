/** @type {import('./$types').PageServerLoad} */
import { request, gql } from 'graphql-request';

export async function load({ params }) {
	const { slug } = params;
	const variables = {
		slug,
		key: '1'
	};

	// console.log(variables);
	const query = gql`
		query catalog($slug: String!, $key: String!) {
			catalog_one(slug: $slug, key: $key) {
				value
				rubric {
					value
					slug
				}
			}
		}
	`;
	// const query = gql`
	// 	query all_rubric {
	// 		rubric {
	// 			id
	// 			value
	// 		}
	// 	}
	// `;

	const catalog = await request('http://127.0.0.1:8001/graphql', query, variables);
	// const rubric = await request('https://gost-remont.com/graphql/', query);
	if (catalog) return { catalog };

	// const { slug } = params;
	// console.log(rubric);
	return { catalog };
}
