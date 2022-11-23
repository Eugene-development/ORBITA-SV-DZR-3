/** @type {import('./$types').PageLoad} */
import { request, gql } from 'graphql-request';

export async function load({ data }) {
	const { catalog } = data;
	return { catalog };
}
