<script>

	export let actions;
</script>

<div class="bg-white">
	<div class="mx-auto max-w-2xl py-4 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
		<!-- <h2 class="text-2xl font-bold tracking-tight text-gray-900">
			Распродажа товара со скидкой до 20%
		</h2> -->

		<div class="mt-6 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

				{#each actions as { action, price, description, link, img }}

			<div class="group rounded-md relative shadow-lg p-3">
				<div
					class="h-56 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none "
				>
					<img
						src="{img}"
						alt=""
						class=" my-4  object-contain "
					/>
				</div>
				<div class="mt-4 flex justify-between">
					<div>
						<h3 class="pl-2 text-sm text-gray-700">
							<span aria-hidden="true" class="inset-0" />
							{action}
						</h3>
					</div>
					<p class="ml-1 text-sm font-medium text-gray-900">{price}р.</p>
				</div>
				<button
					type="button"
					class="mt-2 align-bottom rounded-md text-sm text-gray-100 bg-cyan-600 hover:bg-cyan-700 px-2 py-0.5"
					>В корзину</button
				>
			</div>
	{/each}
		</div>
	</div>
</div>
