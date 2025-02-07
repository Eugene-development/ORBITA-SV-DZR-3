<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>"Орбита-строй" | Стройматериалы со скидкой</title>
	<meta
		content="Представлены стройматериалы со скидкой для экономии бюджета при проведении ремонтных работ"
		name="description"
	/>
</svelte:head>

<section class="">
	<div class="bg-white py-24 ">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl sm:text-center">
				<h2 class="text-34l text-balance font-semibold tracking-tight text-gray-900 sm:text-5xl">
					Стройматериалы со скидкой
				</h2>
				<p class="mt-6 text-lg text-gray-600">
					Успейте купить строительные материалы по выгодным ценам! Скидки на всё, что нужно для
					вашего ремонта и строительства.
				</p>
			</div>
			<ul
				class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
			>
				{#each data.discountProducts as item}
					<li class="flex flex-col gap-6 xl:flex-row border p-6 rounded-xl">
						<img
							class=" w-52 flex-none rounded-2xl object-contain"
							src={item.img}
							alt="Стройматериалы со скидкой"
						/>
						<div class="flex-auto relative">
							<h3 class="text-lg/8 font-semibold tracking-tight text-gray-900">{item.value}</h3>
							{#if item.oldPrice}
							<p class="mt-2 text-sm text-gray-600">Старая цена: <span class="line-through">{item.oldPrice} р/{item.unit}</span> </p>
							{/if}
							<p class="mt-1 text-sm {item.oldPrice ? 'text-red-700' : 'text-gray-600'}">Цена: {item.price} р/{item.unit}</p>
							<div class="absolute bottom-0">
								<a
									href={item.href}
									class="rounded bg-red-700 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800"
									>Подробнее</a
								>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
