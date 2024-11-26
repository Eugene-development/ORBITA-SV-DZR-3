/** @type {import('./$types').PageLoad} */

export async function load() {
	const discountProducts = [
		{
			value: 'Cмесь для пола "Юнис" Горизонт универсальный (20 кг)',
			price: 415,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%8E%D1%83.jpg',
			href: '/shop/product/cmes-dlya-pola-yunis-gorizont-universalnyi-20-kg',
			unit: 'шт.'
		},
		// {
		// 	value: 'Пена пистолетная "DONEWELL" 65',
		// 	price: 388,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/0XXpQNYfLTEeVGjtnHaPUV9LweWEOobLAeObzt8Z.png',
		// 	href: '/shop/product/donewell-pena-montaznaya-65',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Пена пистолетная "DONEWELL" 65 ЗИМА -18',
		// 	price: 392,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/0XXpQNYfLTEeVGjtnHaPUV9LweWEOobLAeObzt8Z.png',
		// 	href: '/shop/product/donewell-pena-montaznaya-70',
		// 	unit: 'шт.'
		// },
		{
			value: 'Краска водно-дисперсионная "Текс" Универсал влагостойкая (14 кг)',
			price: 1412,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/eejGmEDwXOL1hZZoQ5W3kP14npEFvK49auJ3o1Nz.jpeg',
			href: '/shop/product/kraska-vodno-dispersionnaya-teks-universal-vlagostoykaya-14-kg',
			unit: 'шт.'
		},
		{
			value:
				'Клей для плитки и керамогранита "Церезит СМ 14 extra" для улицы и теплых полов (25 кг)',
			price: 760,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%81%D0%BC14.jpg',
			href: '/shop/product/klei-dlya-plitki-i-keramogranita-cerezit-sm-14-extra-dlya-ulicy-i-teplyx-polov-25-kg',
			unit: 'шт.'
		},
		{
			value: 'Клей для плитки Кнауф Флизенклебер (25 кг)',
			price: 434,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%BB%D0%B8%D0%B7%D0%B5%D0%BD.webp',
			href: '/shop/product/klei-dlya-plitki-knauf-flizenkleber-25-kg',
			unit: 'меш.'
		},
		{
			value: 'Керамзит крупный (фракция 10-20 мм) 0,04 м3',
			price: 127,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/keramzit.jpg',
			href: '/shop/product/keramzit-krupnyi-m350-samara-frakciya-10-20-mm-004-m3',
			unit: 'меш.'
		},
		{
			value: 'Бетоноконтакт ЕК 14кг',
			price: 1304,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/17443.750x0.jpg',
			href: '/shop/product/bietonokontakt-ie-k-14kgh',
			unit: 'шт.'
		},
		{
			value: 'Профиль потолочный "Кнауф" 60/27 толщ. 0,6 мм (3 м)',
			price: 333,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/fP6qERpplBYG9CRXINoXc23B3VBR8wQoH6W80cGC.jpeg',
			href: '/shop/product/profil-potolocnyi-knauf-6027-tolshh-06-mm-3-m',
			unit: 'шт.'
		},
		{
			value: 'Профиль направляющий "Кнауф" 27/28 толщ. 0,6 мм (3м)',
			price: 228,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/6Ky8FHCrpmRRRnw3O6QjlKtjEZRGNAWl9VvKlI0h.jpeg',
			href: '/shop/product/profil-napravlyayushhii-knauf-2728-tolshh-06-mm-3m',
			unit: 'шт.'
		},
		{
			value: 'Поликарбонат сотовый POLIPLAST ST4*2100*12000 прозрачный',
			price: 5000,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lSHy2nYTCubCyXeSrG38YM8CD4DPL88MeYQzrSSw.png',
			href: '/shop/product/polikarbonat-sotovyi-prozracnyi-4mm',
			unit: 'шт.'
		},
		{
			value: 'Профлист C-10 1160*2000 RAL 3005 Вишня',
			price: 1342,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/LEoXvZkdeqrjHKHAmrPQQ2RzFo7DMDLpT948VWKw.jpg',
			href: '/shop/product/profnastil-s-10-ral-3005-11602000',
			unit: 'лист'
		},
		{
			value: 'Профлист С-10 1160*3000 Оцинкованный',
			price: 1640,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/o233615480a6fded9690ecb346.jpg',
			href: '/shop/product/profnastil-s-10-11602000-ocinkovannyi',
			unit: 'шт.'
		},
		{
			value: 'Рубероид РПП 300 (0)',
			price: 525,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ruberoid-rpp-rkp-rkk.jpg',
			href: '/shop/product/ruberoid-rpp-300-tu-texnonikol-15-m2',
			unit: 'шт.'
		},
		{
			value: 'Рубероид РКК 350 ТУ 10 кв.м',
			price: 578,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ruberoid-rpp-rkp-rkk.jpg',
			href: '/shop/product/ruberoid-rkk-350-tu-texnonikol-10-m2',
			unit: 'шт.'
		},
		{
			value: 'Сетка рабица оц (1,8м*10м) 50*50*1,6',
			price: 1484,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/rab.png',
			href: '/shop/product/setka-rabica-ocinkovannaya-18m10m-yaceika-5050-d-16',
			unit: 'шт.'
		},
		{
			value: 'Сетка Сварная Ф5=3 100*100*2*0,5',
			price: 58,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%81%D0%B5%D1%82%D0%BA%D0%B0.jpg',
			href: '/shop/product/setka-svarnaya-f3-100100205',
			unit: 'шт.'
		},
		{
			value: 'Пескобетон М-300(25кг) "Престиж"',
			price: 180,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/d2mCWYGA3dewlVi8teMhWz8wu9Zu2Vqsa7XsPtvk.jpeg',
			href: '/shop/product/peskobeton-m-300-25kg-eso-prestiz',
			unit: 'шт.'
		},
		{
			value: 'Труба Д25 L-4м. с арм. стекловолокном серая',
			price: 260,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/tVHD3KcfKSYJz41DxjXRGj7IDCGtgxZIVrYq5rAA.jpg',
			href: '/shop/product/truba-d25-l-4m-s-arm-steklovoloknom-seraya',
			unit: 'шт.'
		},
		{
			value: 'Элемент пола "Кнауф" 20мм (1,2х0,6) (0,72м2)',
			price: 512,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%8D%D0%BB%20%D0%BF%D0%BE%D0%BB%D0%B0.jpg',
			href: '/shop/product/element-pola-knauf-20-mm-1200600',
			unit: 'шт.'
		},
		{
			value: 'ЭПП XPS30-200 Стандарт 1180*580*50-L(8шт./уп)',
			price: 319,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png',
			href: '/shop/product/epp-xps30-200-texnopleks-118058050-l',
			unit: 'шт.'
		},
		{
			value: 'ЭПП ХР30-200 Стандарт 1180*580*30-L (13шт/уп)',
			price: 206,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png',
			href: '/shop/product/epp-xps30-200-texnopleks-118058030-l',
			unit: 'шт.'
		},

	];

	return { discountProducts };
}
