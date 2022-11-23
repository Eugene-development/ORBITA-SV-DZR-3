<script>
	import { visibleCatalog } from '$lib/store/stores.js';
	import { useInvert } from '$lib/functions/broker';

	const { invert } = useInvert;

	export let catalog;
</script>

{#if $visibleCatalog}
	<!-- {#if $buttonVisibleCatalog} -->
	<div class="mt-4 bg-white pb-4 sm:pb-6">
		<div class="relative">
			<div class="absolute inset-0 h-1/2 border-b border-slate-200 bg-white" />
			<!-- <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-gray-200 via-slate-100 to-gray-200 border-b border-slate-200"></div> -->
			<div class="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8">
				<div class="mx-auto w-full">
					<div class="rounded-lg bg-white shadow-md shadow-gray-700/50 lg:hidden">
						<!-- {#each head as { id, slug, name }}
									<a
										sveltekit:noscroll
										href="/shop/rubric/{slug}"
										on:click={() => buttonVisibleCatalog.update(invertToFalse)}
										class="flex flex-col border border-gray-200 bg-gradient-to-tr from-cyan-500 via-cyan-900 to-cyan-700 p-4 text-center hover:bg-gradient-to-bl sm:border-r sm:border-l"
									>
										<span
											class="order-2 text-sm font-medium leading-6 tracking-wider text-slate-50 antialiased"
										>
											{name}
										</span>
									</a>
								{/each} -->
					</div>

					<div
						class="hidden rounded-lg bg-white shadow-md shadow-gray-700/50 lg:block lg:grid lg:grid-cols-7"
					>
						{#each catalog as { id, slug, name }}
							<a
								sveltekit:noscroll
								href="/shop/rubric/{slug}"
								class="flex flex-col  border border-gray-200 p-4 text-center hover:border-red-800 hover:bg-gradient-to-l hover:from-red-900 hover:via-red-800 hover:to-red-900 sm:border-r sm:border-l  "
							>
								<span
									class="delay-50 duration-50 order-2 text-sm font-medium leading-6 tracking-wider text-slate-50 transition ease-in-out hover:scale-110"
								>
									{name}
								</span>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="mt-4 bg-white pb-4 sm:pb-6">
		<div class="relative">
			<div class="absolute inset-0 h-1/2 border-b border-slate-200 bg-white" />
			<div class="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8 ">
				<div class="mx-auto w-full ">
					<!-- svelte-ignore missing-declaration -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						on:click={() => visibleCatalog.update(invert)}
						class="rounded-md border border-gray-200 bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-700 text-center shadow-md shadow-gray-700/50 hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-800 "
					>
						<p class="p-3">
							<span class="text-2xl font-medium tracking-wider text-white">
								Наш каталог стройматериалов
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
