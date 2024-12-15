<script>
	export let actions;
</script>

<section class="bg-white ">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Акции завода "Церезит"</h2>
            <p class="font-light text-gray-500 lg:mb-16 sm:text-xl ">Условия отгрузок и размер остатков уточняйте у наших менеджеров</p>
        </div> 
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {#each actions as { action, price, description, link, img }}
            <div class="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div class="p-10">
                    <img class="object-cover h-96 w-full rounded-lg" src={img} alt="Акция">
                </div>
                <div class="px-10 pb-5 ">
                    <h3 class="text-lg font-bold tracking-tight text-gray-900 h-24">
                        <a href="#">{action}</a>
                    </h3>
                    <span class="text-gray-500 ">{price} руб/шт</span>
                    <!-- <p class="mt-3 mb-4 font-light text-gray-500 ">Jese drives the technical strategy of the themesberg platform and brand.</p> -->
                </div>
            </div>  
            {/each}
        </div>  
    </div>
  </section>