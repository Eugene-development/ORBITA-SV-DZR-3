import { gql } from 'graphql-request';

export const ONE_PRODUCT = gql`
	query product($slug: String!, $key: String!) {
		product_one(slug: $slug, key: $key) {
			value
			price {
				value
			}
			unit {
				value
			}
			image {
				hash
				alt
			}
			parent: parentable {
				... on Category {
					value
				}
			}
		}
	}
`;
