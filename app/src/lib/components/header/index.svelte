

<script>
    import Top from "$lib/components/header/top/index.svelte"
</script>

<header>
	<!-- This example requires Tailwind CSS v2.0+ -->
	<!--    <div class="relative bg-gradient-to-tr from-gray-500 via-gray-600 to-gray-500">-->
	<!--        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">-->
	<!--            <div class="pr-16 sm:text-left">-->
	<!--                <div class="font-medium text-white text-sm">-->
	<!--                    <span class="md:hidden"><strong>8 (800) 555-8-111</strong> (звонок бесплатный)<br> 8 (930) 688-88-62<br> 8 (902) 303-36-54</span>-->
	<!--                    <span class="hidden md:inline"><strong>8 (800) 555-8-111</strong> (звонок бесплатный) - 8 (930) 688-88-62 - 8 (902) 303-36-54</span>-->
	<!--                    <span class="block sm:ml-5 sm:inline-block">почта: <strong>info@orbita-stroy.com</strong></span>-->
	<!--&lt;!&ndash;                    <span class="block sm:ml-5 sm:inline-block">режим: Пн-Пт 8:00-17:30; Сб 9:00-16:00</span>&ndash;&gt;-->

	<!--                        <button class="ml-8 inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md text-base font-medium text-white bg-slate-50 hover:bg-gray-800 shadow-lg shadow-gray-700/50" href="/shop/cart" >-->
	<!--                            <svg class="mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"-->
	<!--                                 xmlns="http://www.w3.org/2000/svg">-->
	<!--                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke-linecap="round" stroke-linejoin="round"-->
	<!--                                      stroke-width="2" />-->
	<!--                            </svg>-->
	<!--                            Корзина-->
	<!--                        </button>-->

	<!--                </div>-->

	<!--            </div>-->
	<!--        </div>-->
	<!--    </div>-->

	<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<Top/>
	<div class="relative -mx-1 bg-white">
		<div aria-hidden="true" class="pointer-events-none absolute inset-0 z-30 shadow" />
		<div class="relative z-20">
			<div
				class="mx-auto flex max-w-full items-center justify-between px-2 py-4 sm:px-6 sm:py-3 md:space-x-8 lg:px-10"
			>
				<div>
					<a class="flex" href="/">
						<span class="sr-only">Logo</span>
						<img
							alt="Logo"
							class="h-8 w-auto sm:h-8"
							src="https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/logo/logo.png"
						/>
					</a>
				</div>

				<div class="flex items-center md:ml-12 lg:hidden">
					<a
						class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-3 py-1 text-base font-medium text-white shadow-lg shadow-gray-700/50 hover:bg-gray-800"
						href="/shop/cart"
						sveltekit:noscroll
					>
						<svg
							class="mr-1 h-5 w-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</svg>
						Корзина (
						<!-- <div class="mx-1 text-red-500">{countLengthCart}</div> -->
						)
					</a>
				</div>

				<div class="-my-2 -mr-2 lg:hidden">
					<!-- <button
						aria-expanded="false"
						class="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
						on:click={changeVisibleMobileMenu}
						type="button"
					>
						<span class="sr-only">Открыть меню</span>
						<span class="mx-2">Меню</span>
						<svg
							aria-hidden="true"
							class="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 6h16M4 12h16M4 18h16"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							/>
						</svg>
					</button> -->
				</div>
				<div class="hidden sm:items-center sm:justify-between lg:flex lg:flex-1">
					<nav class="flex space-x-8 font-semibold">
						<a class="text-base text-cyan-900 hover:text-red-800 " href="/">Главная</a>
						<a class="text-base text-cyan-900 hover:text-red-800" href="/about">Компания</a>
						<!-- <div on:outclick={closeVisibleInformationMenu} use:clickOutside> -->
							<!-- Item active: "text-slate-900", Item inactive: "text-slate-500" -->
							<!-- <button
								aria-expanded="false"
								class="group inline-flex items-center rounded-md bg-white text-base text-cyan-900 hover:text-red-800 focus:text-red-700 focus:outline-none"
								on:click={changeVisibleInformationMenu}
								on:click={changeVisibleInformationMenu}
								type="button"
							>
								<span class="font-semibold">Информация</span> -->
								<!--
                                  Heroicon name: solid/chevron-down

                                  Item active: "text-gray-900", Item inactive: "text-slate-400"
                                -->
								<!-- <svg
									aria-hidden="true"
									class="ml-2 h-5 w-5 text-red-700"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clip-rule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										fill-rule="evenodd"
									/>
								</svg>
							</button> -->

							<!--
                              'More' flyout menu, show/hide based on flyout menu state.

                              Entering: "transition ease-out duration-200"
                                From: "opacity-0 -translate-y-1"
                                To: "opacity-100 translate-y-0"
                              Leaving: "transition ease-in duration-150"
                                From: "opacity-100 translate-y-0"
                                To: "opacity-0 -translate-y-1"
                            -->
							{#if true}
							<!-- {#if $informationMenu} -->
								<div class="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
									<div class="absolute inset-0 flex">
										<div class="w-1/2 bg-white" />
										<div class="w-1/2 bg-slate-50" />
									</div>
									<div class="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
										<nav
											class="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
										>
											<div>
												<!--                                                <h3 class="text-sm font-medium tracking-wide text-slate-500 uppercase">Company</h3>-->
												<ul class="mt-5 space-y-6">
													<!-- {#each leftInfo as { href, displayName }}
														<li class="flow-root">
															<a
																{href}
																on:click={closeVisibleInformationMenu}
																class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-slate-900 hover:bg-slate-50"
															>
																<svg
																	class="h-6 w-6 flex-shrink-0 text-gray-400"
																	xmlns="http://www.w3.org/2000/svg"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																	aria-hidden="true"
																>
																	<path
																		stroke-linecap="round"
																		stroke-linejoin="round"
																		stroke-width="2"
																		d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																	/>
																</svg>
																<span class="ml-4">{displayName}</span>
															</a>
														</li>
													{/each} -->
												</ul>
											</div>
											<div>
												<ul class="mt-5 space-y-6">
													<!-- {#each rightInfo as { href, displayName }}
														<li class="flow-root">
															<a
																{href}
																on:click={changeVisibleInformationMenu}
																on:outclick={changeVisibleInformationMenu}
																class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-slate-900 hover:bg-slate-50"
															>
																<svg
																	class="h-6 w-6 flex-shrink-0 text-gray-400"
																	xmlns="http://www.w3.org/2000/svg"
																	fill="none"
																	viewBox="0 0 24 24"
																	stroke="currentColor"
																	aria-hidden="true"
																>
																	<path
																		stroke-linecap="round"
																		stroke-linejoin="round"
																		stroke-width="2"
																		d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
																	/>
																</svg>
																<span class="ml-4">{displayName}</span>
															</a>
														</li>
													{/each} -->
												</ul>
											</div>
										</nav>
										<div class="bg-slate-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
											<div>
												<h3 class="text-sm font-medium uppercase tracking-wide text-slate-500">
													Последнее из блога
												</h3>
												<!--                                                <ul role="list" class="mt-6 space-y-6">-->
												<!--                                                    <li class="flow-root">-->
												<!--                                                        <a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-slate-100">-->
												<!--                                                            <div class="hidden sm:block flex-shrink-0">-->
												<!--                                                                <img class="w-32 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80" alt="">-->
												<!--                                                            </div>-->
												<!--                                                            <div class="w-0 flex-1 sm:ml-8">-->
												<!--                                                                <h4 class="text-base font-medium text-slate-900 truncate">Boost your conversion rate</h4>-->
												<!--                                                                <p class="mt-1 text-sm text-slate-500">Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.</p>-->
												<!--                                                            </div>-->
												<!--                                                        </a>-->
												<!--                                                    </li>-->

												<!--                                                    <li class="flow-root">-->
												<!--                                                        <a href="#" class="-m-3 p-3 flex rounded-lg hover:bg-slate-100">-->
												<!--                                                            <div class="hidden sm:block flex-shrink-0">-->
												<!--                                                                <img class="w-32 h-20 object-cover rounded-md" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80" alt="">-->
												<!--                                                            </div>-->
												<!--                                                            <div class="w-0 flex-1 sm:ml-8">-->
												<!--                                                                <h4 class="text-base font-medium text-slate-900 truncate">How to use search engine optimization to drive traffic to your site</h4>-->
												<!--                                                                <p class="mt-1 text-sm text-slate-500">Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.</p>-->
												<!--                                                            </div>-->
												<!--                                                        </a>-->
												<!--                                                    </li>-->
												<!--                                                </ul>-->
											</div>
											<div class="mt-6 text-sm font-medium">
												<!-- <a
													href="/blog"
													on:click={changeVisibleInformationMenu}
													class="text-red-700 hover:text-red-800"
												>
													Перейти в блог <span aria-hidden="true">&rarr;</span></a
												> -->
											</div>
										</div>
									</div>
								</div>
							{/if}
						</div>
						<a class="text-base text-cyan-900 hover:text-red-800" href="/blog"> Блог </a>
						<a class="text-base text-cyan-900 hover:text-red-800" href="/information/action">
							Акции
						</a>
						<a class="text-base text-cyan-900 hover:text-red-800" href="/contact"> Контакты </a>
						<a
							class="text-base text-cyan-900 hover:text-red-800"
							href="https://vk.com/orbita_stroy"
							target="_blank"
						>
							VK
						</a>
					<!-- </nav> -->
					<div class="flex items-center md:ml-12">
						<a
							class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-900 px-4 py-1 text-base font-medium text-white shadow-lg shadow-gray-900/50 hover:bg-gray-800"
							href="/shop/cart"
							sveltekit:noscroll
						>
							<svg
								class="mr-1 h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
								/>
							</svg>
							Корзина (
							<!-- <div class="mx-1 text-red-500">{countLengthCart}</div> -->
							)
						</a>
					</div>
				</div>
			</div>
		</div>

	<!-- </div> -->

	<div class=" ">

		<div class="max-w-9xl mx-auto  px-4 sm:px-6 lg:px-8">
			<div class="mx-auto  text-center">
				<h2
					class="py-6 text-4xl font-extrabold lowercase text-cyan-900 antialiased first-letter:uppercase sm:text-5xl lg:text-6xl"
				>
					<!-- {$pageTitle} -->
				</h2>
				<img
					class="inset-0 mt-2 h-64 w-full  object-cover"
					src="https://storage.yandexcloud.net/brand-logo/orbita/main-bg.jpeg"
					alt="база строительных материалов"
				/>

				<p class="mt-3 text-xl text-cyan-900 sm:mt-4">
					При заказе через каталог стройматериалов на сайте для вас скидка 5%
				</p>
			</div>
		</div>

		{#if true}
		<!-- {#if $buttonVisibleCatalog} -->
			<div class="mt-4 bg-white pb-4 sm:pb-6">
				<div class="relative">
					<div class="absolute inset-0 h-1/2 border-b border-slate-200 bg-white" />
					<!--                <div class="absolute inset-0 h-1/2 bg-gradient-to-r from-gray-200 via-slate-100 to-gray-200 border-b border-slate-200"></div>-->
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
								<!-- {#each head as { id, slug, name }}
									<a
										sveltekit:noscroll
										href="/shop/rubric/{slug}"
										class="flex flex-col  border border-gray-200 p-4 text-center hover:border-red-800 hover:bg-gradient-to-l hover:from-red-900 hover:via-red-800 hover:to-red-900 sm:border-r sm:border-l {'/rubric/' +
											slug ===
										$page.url.pathname
											? 'bg-gradient-to-r from-red-900 via-red-800 to-red-900'
											: 'bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900'} "
									>
										<span
											class="delay-50 duration-50 order-2 text-sm font-medium leading-6 tracking-wider text-slate-50 transition ease-in-out hover:scale-110"
										>
											{name}
										</span>
									</a>
								{/each} -->
							</div>
						</div>
					</div>
				</div>
			</div>
		<!-- {:else }
			<div class="mt-4 bg-white pb-4 sm:pb-6">
				<div class="relative">
					<div class="absolute inset-0 h-1/2 border-b border-slate-200 bg-white" />
					<div class="relative mx-auto max-w-full px-4 sm:px-6 lg:px-8 ">
						<div class="mx-auto w-full "> -->
							<!-- <div
								on:click={changeButtonVisibleCatalog}
								class="rounded-md border border-gray-200 bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-700 text-center shadow-md shadow-gray-700/50 hover:from-cyan-800 hover:via-cyan-700 hover:to-cyan-800 "
							>
								<p class="p-3">
									<span class="text-2xl font-medium tracking-wider text-white">
										Наш каталог стройматериалов
									</span>
								</p>
							</div>
						</div> -->
					<!-- </div>
				</div>
			</div> -->
		{/if}
	</div>

	<!-- <Search /> -->
</header>
