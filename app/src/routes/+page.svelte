


<script>


    import { onMount } from 'svelte';

    import { request, gql } from 'graphql-request'
	    const query = gql`
	      query all_rubric {
        rubric {
            id
            value
            is_active
            created_at
            updated_at
            parent: parentable {
                ... on Catalog {
                    id
                    value
                }
            }
        }
    }
	`

	onMount(() => {
	  data = request('https://gost-remont.com/graphql/', query);
      console.log(data)
	});

	let responce;
	// const pay = async () => {
	//   response = await request('http://127.0.0.1:8001/graphql/', query);
	//   console.log(response);
	//   return response;
	//   }
	//   pay();
	//   export let response;
	// export let catalog
	// console.log(data);

	// console.log(data.response.catalog[0].value);
	// console.log(data);

	export let data

</script>

<h1>Welcome to SvelteKit</h1>
<p class="text-red-800">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


