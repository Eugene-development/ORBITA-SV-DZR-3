/** @type {import('./$types').PageServerLoad} */
import { request, gql } from 'graphql-request';

export async function load({ params }) {
	const { slug } = params;
	const variables = {
		slug,
		key: '1'
	};

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

	const url = import.meta.env.VITE_URL;

	const catalog = await request(url, query, variables);
	if (catalog) return { catalog };

	// const { slug } = params;
	// console.log(rubric);
	// return { catalog };
}
