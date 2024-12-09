<script>
	import { page } from '$app/stores';

	import { visibleCatalog } from '$lib/store/stores.js';
	import { useInvert } from '$lib/functions/broker';

	const { invert } = useInvert;

	export let catalog;
</script>

{#if true}
	<!-- {#if $visibleCatalog} -->
	<div class=" bg-white pb-3 sm:pb-4">
		<div class="relative">
			<div class="absolute inset-0 h-1/2 border-b border-slate-200 bg-gray-100" />
			<!-- <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-gray-200 via-slate-100 to-gray-200 border-b border-slate-200"></div> -->
			<div class="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8">
				<div class="mx-auto w-full">
					<div class="rounded-lg bg-gray-50 shadow-md shadow-gray-700/50 lg:hidden">
						{#each catalog as { slug, name }}
							<a
								data-sveltekit-prefetch
								data-sveltekit-noscroll
								href="/shop/rubric/{slug}"
								on:click={() => visibleCatalog.update(invert)}
								class="flex flex-col border border-gray-300  px-4 py-2 text-center hover:bg-gradient-to-bl sm:border-r sm:border-l"
							>
								<div class="flex text-cyan-900">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-5 h-5 mt-0.5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M8.25 4.5l7.5 7.5-7.5 7.5"
										/>
									</svg>

									<span
										class="order-2 ml-2 text-sm font-medium leading-6 tracking-wider text-cyan-900 antialiased"
									>
										{name}
									</span>
								</div>
							</a>
						{/each}
					</div>
					<div class="mb-2 mt-2 lg:mt-0 text-lg md:text-2xl text-gray-800 text-center lg:text-left">
						<span class="text-red-800">Наши</span> цены сэкономят
						<span class="text-red-800">Ваши</span> деньги
					</div>

					<div
						class="hidden rounded-lg bg-white shadow-lg shadow-gray-500/50 lg:grid lg:grid-cols-6"
					>
						{#each catalog as { slug, name }}
							<a
								data-sveltekit-prefetch
								data-sveltekit-noscroll
								href="/shop/rubric/{slug}"
								class="flex flex-col  border border-gray-300 px-2 py-3 text-center  hover:bg-gradient-to-l hover:from-cyan-300 hover:via-cyan-200 hover:to-cyan-300 sm:border-r sm:border-l 
								{$page.url.pathname === '/shop/rubric/' + slug
									? 'bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-300'
									: 'bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500'}"
							>
								<div
									class="flex mx-auto text-cyan-50 transition ease-in-out hover:scale-110 items-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-4 h-4 mt-0.5 text-red-900"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M8.25 4.5l7.5 7.5-7.5 7.5"
										/>
									</svg>

									<span
										class="ml-1 selection:delay-50 duration-50 order-2 text-base font-medium leading-6 tracking-wider text-gray-900"
									>
										{name}
									</span>
								</div>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="mt-3 bg-white pb-3 sm:pb-6">
		<div class="relative">
			<div class="absolute inset-0 h-1/2 border-b border-slate-200 bg-gray-100" />
			<div class="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8 ">
				<div class="mx-auto w-full ">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<button
						on:click={() => visibleCatalog.update(invert)}
						class="rounded-md border w-full border-gray-200 bg-gradient-to-r from-cyan-400 via-cyan-700 to-cyan-400 text-center shadow-md shadow-gray-700/50 hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-800 "
					>
						<p class="p-3">
							<span class="text-2xl font-medium tracking-wider text-white animate-pulse">
								Каталог стройматериалов
							</span>
						</p>
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
