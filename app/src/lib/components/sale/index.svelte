<script>
	// import { pageTitle } from '$stores/store.js';

	// pageTitle.update(() => 'Акции');

	export let actions;
</script>

<div class="max-w-7xl mx-auto py-8 sm:py-12">
	<div class="px-6 lg:px-0">
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<h1 class="text-4xl font-semibold text-gray-900">Акции завода "Церезит"</h1>
				<p class="mt-2 text-base text-gray-700">
					Условия отгрузок и размер остатков уточняйте у наших менеджеров
				</p>
			</div>
		</div>
		<div class="mt-8 flow-root">
			<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
					<table class="min-w-full divide-y divide-gray-300">
						<thead>
							<tr>
								<th
									scope="col"
									class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
									>Наименование</th
								>
								<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>Склады</th
								>
								<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>Цена</th
								>
								<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
									>Статус</th
								>
								<!-- <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span class="sr-only">Edit</span>
                  </th> -->
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200 bg-white">
							{#each actions as { action, price, description, link }}
								<tr>
									<td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
										<div class="flex items-center">
											<!-- <div class="size-11 shrink-0">
                        <img class="size-11 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                      </div> -->
											<div class="ml-4">
												<div class="font-medium text-gray-900">{action}</div>
												<div class="mt-1 text-gray-500">Производство: завод "Церезит"</div>
											</div>
										</div>
									</td>
									<td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
										<div class="text-gray-900">Дзержинск, пр. Ленина, 121-В</div>
										<div class="mt-1 text-gray-900">Дзержинск, ул. Космонавтов, 4-Б</div>
									</td>
									<td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
										<span
											class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
											>{price} руб/шт</span
										>
									</td>
									<td class="py-4 pl-0 pr-4 text-sm/6 sm:pr-4 lg:pr-6">
										<div class="flex items-center justify-end gap-x-2 sm:justify-start">
											<div class="flex-none rounded-full bg-green-400 p-1 text-green-400">
												<div class="size-1.5 rounded-full bg-current" />
											</div>
											<div class="hidden text-gray-900 sm:block">В наличии</div>
										</div>
									</td>
									<!-- <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                  </td> -->
								</tr>
							{/each}

							<!-- More people... -->
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<!-- {#each actions as { action, price, description, link }} -->

	<!-- <div class=" py-8 sm:py-12">
			<div class="relative sm:py-16">
				<div aria-hidden="true" class="hidden sm:block">
					<div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
					<svg
						class="absolute top-8 left-1/2 -ml-3"
						width="404"
						height="392"
						fill="none"
						viewBox="0 0 404 392"
					>
						<defs>
							<pattern
								id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
							</pattern>
						</defs>
						<rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
					</svg>
				</div>
				<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
					<div
						class="relative rounded-2xl px-6 py-10 bg-cyan-700 overflow-hidden shadow-xl sm:px-12 sm:py-20"
					>
						<div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
							<svg
								class="absolute inset-0 h-full w-full"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 1463 360"
							>
								<path
									class="text-cyan-600 text-opacity-40"
									fill="currentColor"
									d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
								/>
								<path
									class="text-cyan-800 text-opacity-40"
									fill="currentColor"
									d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
								/>
							</svg>
						</div>
						<a href={link} class="relative" sveltekit:prefetch>
							<div class="sm:text-center">
								<h2 class="my-4 text-2xl font-extrabold text-white tracking-tight md:text-5xl">
									{action}
								</h2>
								<span class="text-5xl font-extrabold text-white">{price} руб.</span>
								<p class="mt-6 mx-auto max-w-2xl text-lg text-cyan-50">
									{description}
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="py-8 sm:py-12">
			<div class="relative sm:py-16">
				<div aria-hidden="true" class="hidden sm:block">
					<div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
					<svg
						class="absolute top-8 left-1/2 -ml-3"
						width="404"
						height="392"
						fill="none"
						viewBox="0 0 404 392"
					>
						<defs>
							<pattern
								id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
							</pattern>
						</defs>
						<rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
					</svg>
				</div>
				<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
					<div
						class="relative rounded-2xl px-6 py-10 bg-cyan-700 overflow-hidden shadow-xl sm:px-12 sm:py-20"
					>
						<div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
							<svg
								class="absolute inset-0 h-full w-full"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 1463 360"
							>
								<path
									class="text-cyan-600 text-opacity-40"
									fill="currentColor"
									d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
								/>
								<path
									class="text-cyan-800 text-opacity-40"
									fill="currentColor"
									d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
								/>
							</svg>
						</div>
						<div class="relative">
							<div class="sm:text-center">
								<h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
									Акций на данный момент нет
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each} -->
</div>
