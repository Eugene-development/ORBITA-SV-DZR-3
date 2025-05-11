/** @type {import('./$types').PageLoad} */

export async function load() {
	const discountProducts = [
		{
			value: 'Рубероид РКК 350 ТУ 10 кв.м',
			price: 579,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ruberoid-rpp-rkp-rkk.jpg',
			href: '/shop/product/ruberoid-rkk-350-tu-texnonikol-10-m2',
			unit: 'шт.'
		},
		{
			value: 'Рубероид РПП 300 (0)',
			price: 526,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ruberoid-rpp-rkp-rkk.jpg',
			href: '/shop/product/ruberoid-rpp-300-tu-texnonikol-15-m2',
			unit: 'шт.'
		},
		{
			value: '',
			price: 0,
			img: '',
			href: '',
			unit: 'шт.'
		},
		{
			value: 'Утеплитель Акустик Кнауф 037 12м2 (1,23*0,61*50)',
			price: 2534,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/5ekFCWz7W8moX1h34iwRSU7xKwXUgBGp2C0Kuluj.jpg',
			href: '/shop/product/uteplitel-akustiknauf-12206150',
			unit: 'шт.'
		},
		{
			value: 'Утеплитель КНАУФ ТИСМА Aquastatik(1.2*8.3*2)50мм',
			price: 2438,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/YJr9o5oV0tsDG9HCE1u55fet3E4orBDgAjH7gE0J.png',
			href: '/shop/product/uteplitel-knauf-tisma-r44mr-50x1200x8300-2-st-1992m2-1m3',
			unit: 'шт.'
		},
		{
			value: '',
			price: 0,
			img: '',
			href: '',
			unit: 'шт.'
		},
		{
			value: '',
			price: 0,
			img: '',
			href: '',
			unit: 'шт.'
		},
		{
			value: 'Профлист C-10 1160*2000 RAL 8017 Коричневый',
			price: 0,
			img: '',
			href: '',
			unit: 'лист'
		},
		{
			value: 'Профлист С-21 1050*2000 Оцинкованный',
			price: 0,
			img: '',
			href: '',
			unit: 'лист'
		},
		{
			value: 'Пена пистолетная огнестойкая DONEWELL 65',
			price: 0,
			img: '',
			href: '',
			unit: 'шт.'
		},
		{
			value: 'Пена пистолетная Желтая "SOUDAL" (750мл) (12)',
			price: 0,
			img: '',
			href: '',
			unit: 'шт.'
		},
		{
			value: 'Грунтовка "ЕК" G100 (10л)',
			price: 1156,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G100.png',
			href: '/shop/product/gruntovka-universalnaya-koncentrirovannaya-ek-g100-10-l',
			unit: 'шт.'
		},
		{
			value: 'Грунтовка "ЕК" G200 (10л)',
			price: 692,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G200.png',
			href: '/shop/product/gruntovka-universalnaya-ek-g200-10-l',
			unit: 'шт.'
		},
		{
			value: 'Смесь для пола "ЕК" LEVEL 2.0 (20кг) влагостойкая и быстротвердеющая',
			price: 355,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.0.png',
			href: '/shop/product/nalivnoi-pol-ek-level-20-bystrotverdeyushhii-vlagostoikii-20-kg',
			unit: 'шт.'
		},
		{
			value: 'Смесь для пола "EK" LEVEL 2.1 (20кг) быстротвердеющая',
			price: 367,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-level-2.1.png',
			href: '/shop/product/nalivnoi-pol-ek-level-21-bystrotverdeyushhii-20-kg',
			unit: 'шт.'
		},
		{
			value: 'Смесь для пола "Юнис" Горизонт универсальный (20кг)',
			price: 416,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%8E%D1%83.jpg',
			href: '/shop/product/cmes-dlya-pola-yunis-gorizont-universalnyi-20-kg',
			unit: 'шт.'
		},
		{
			value: 'Смесь сухая универсальная Престиж М-150(25кг)',
			price: 160,
			img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/m150-500x500.png',
			href: '/shop/product/smes-suxaya-universalnaya-m-150-25-kg',
			unit: 'шт.'
		}

		// {
		// 	value: 'Клей для плитки "Юнис Гранит" (25кг)',
		// 	price: 730,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/mWb8GjYf8j2yrX91WbX9LXuiVyQhfomCgRKupTjI.png',
		// 	href: '/shop/product/klei-dlya-plitki-yunis-granit',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Пена пистолетная "KUDO PROF 65+" 1000мл(12)',
		// 	price: 472,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/nDi3dslKCa65E5yCwPJNymIdnrd2SejMPoFp65Ng.jpg',
		// 	href: '/shop/product/pena-pistoletnaya-kudo-proff-65-arktika',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'ПЕНОПЛАСТ ПСБ-С-15 1000*1000*100',
		// 	price: 239,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D0%B5%D0%BD%D0%BE%D0%BF%D0%BB%D0%B0%D1%81%D1%82.jpg',
		// 	href: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D0%B5%D0%BD%D0%BE%D0%BF%D0%BB%D0%B0%D1%81%D1%82.jpg',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'ПЕНОПЛАСТ ПСБ-С-15 1000*1000*50',
		// 	price: 120,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D0%B5%D0%BD%D0%BE%D0%BF%D0%BB%D0%B0%D1%81%D1%82.jpg',
		// 	href: '/shop/product/penoplast-psb-s-15-1000100050',
		// 	unit: 'шт.'
		// },

		// {
		// 	value: 'Бетонконтакт "Церезит СТ 19/15 кг."',
		// 	price: 1838,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/betonokontakt_ceresit_st19_5_l.jpg',
		// 	href: '/shop/product/betonkontakt-cerezit-st-19-15-kg',
		// 	unit: 'шт.'
		// },

		// {
		// 	value: 'Кирпич силикатный (336 шт./п.)',
		// 	price: 24,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/kirpich-silikatniy-stroitelniy-lipeckiy-1-4-polnoteliy.jpg',
		// 	href: '/shop/product/kirpic-silikatnyi-312-stup',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Клей д/пенополистерола ЕК THERMEX 25 кг.',
		// 	price: 508,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-THERMEX.png',
		// 	href: 'shop/product/klei-dlya-penopolistirola-ek-thermex-25-kg',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Клей д/блоков Бергауф Клебен Блок 25кг',
		// 	price: 348,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/818304731.webp',
		// 	href: '/shop/product/lkey-dla-blokov',
		// 	unit: 'шт.'
		// }
		// {
		// 	value: '',
		// 	price: 0,
		// 	img: '',
		// 	href: '',
		// 	unit: 'шт.'
		// }
		// {
		// 	value: 'Плита "Байкал" 600*600*12 мм',
		// 	price: 183,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/3258638597a892eb737fdb1d4e25cf2f.jpeg',
		// 	href: '/shop/product/plita-baikal-60060012-mm',
		// 	unit: 'шт.'
		// },
		// {
		// 	id: '2958',
		// 	value: 'Краска в/д "PELLIGRINA PAINT" ДЛЯ ПОТОЛКОВ 15 кг',
		// 	price: 1115,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/peligrinnakraska.jpg',
		// 	href: '/shop/product/kraskka-peligrinna',
		// 	unit: 'шт.'
		// },
		// {
		// 	id: '123',
		// 	value: 'Линокром ТПП (15 м2)',
		// 	price: 2600,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BB%D0%B8%D0%BD%D0%BE%D0%BA%D1%80%D0%BE%D0%BC.jpg',
		// 	href: '/shop/product/linokrom-tpp-15-m2',
		// 	unit: 'шт.'
		// },
		// {
		// 	id: '235',
		// 	value: 'Фанера 10мм, сорт 3/4 (1,525*1,525)',
		// 	price: 998,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%B0%D0%BD%D0%B5%D1%80%D0%B0.jpg',
		// 	href: '/shop/product/fanera-10mm-sort-34-15251525',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Труба Д25 L-4м. с арм. стекловолокном серая',
		// 	price: 260,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/tVHD3KcfKSYJz41DxjXRGj7IDCGtgxZIVrYq5rAA.jpg',
		// 	href: '/shop/product/truba-d25-l-4m-s-arm-steklovoloknom-seraya',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Труба Д25 L-4м. серая',
		// 	price: 299,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/vayfYRfvBskPU7aAU9eQ6TuEwa9zNehdHOLv14Zi.jpg',
		// 	href: '/shop/product/truba-d25-l-4m-seraya',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Труба Д20 L-4м. с арм. стекловолокном серая',
		// 	price: 188,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/cdcesf0ZEAd9QJcYy8nyWM7AQxGj89BPdhcWoSDb.jpg',
		// 	href: '/shop/product/truba-d20-l-4m-s-arm-steklovoloknom-seraya',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Труба Д20 L-4м. серая',
		// 	price: 181,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ki77k2qf8lk4N8oWkfjflmkvOUhbn8CmX0TfEJ4A.jpg',
		// 	href: '/shop/product/truba-d20-l-4m-seraya',
		// 	unit: 'шт.'
		// },
		// {
		// 	id: '69',
		// 	value: 'Утеплитель Техноблок 1200х600х50',
		// 	price: 1679,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/nt[yj,kjr.jpg',
		// 	href: '/shop/product/uteplitel-texnoblok-standart-120060050-mm-0288-m3',
		// 	unit: 'шт.'
		// },
		// {
		// 	id: '468',
		// 	value: 'Наливной пол самовыравнивающийся "Церезит" CN 175 (25 кг)',
		// 	oldPrice: '743',
		// 	price: '652',
		// 	img: 'https://ceresit-yauza.ru/assets/images/products/388/orig/cn175-25.jpg',
		// 	href: '/shop/product/nalivnoi-pol-samovyravnivayushhiisya-cerezit-cn-175-25-kg',
		// 	unit: 'шт.'
		// },
		// {
		// 	id: '534',
		// 	value: 'Грунтовка для впитывающих оснований "Церезит" CT 17" (10 л)',
		// 	price: '1020',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/5.png',
		// 	href: '/shop/product/gruntovka-dlya-vpityvayushhix-osnovanii-cerezit-st-17-10-l',
		// 	unit: 'шт.'
		// }
		// {
		// 	id: '1543',
		// 	value: 'ГКЛВ "Кнауф" 9,5мм (1,2х2,5)',
		// 	price: 515,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/jh1ziprw55dtsg0fm7zxud05sgo608u8.jpeg',
		// 	href: '/shop/product/gklv-knauf-danogips-95mm-12x25',
		// 	unit: 'шт.'
		// },
		// {
		// 	id: '1542',
		// 	value: 'Гклв "Кнауф" 12,5мм (1,2х2,5)',
		// 	price: 540,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/jh1ziprw55dtsg0fm7zxud05sgo608u8.jpeg',
		// 	href: '/shop/product/gklv-knauf-danogips-125mm-12x25',
		// 	unit: 'шт.'
		// },
		// {
		// 	id: '154',
		// 	value: 'Пленка п/э шир 3м 100мкм/100м рукав',
		// 	price: 30,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D1%8D.jpg',
		// 	href: '/shop/product/plenka-pe-s-3m-100mkm100m-rukav',
		// 	unit: 'пог.м'
		// },
		// {
		// 	id: '2946',
		// 	value: 'Плита ОСБ-3 2500*1250* 6мм (107) МУРОМ',
		// 	price: 672,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/YBbav3JxXOKl8hYDTen6CzCa1TUlMBagzDxTXlFO.png',
		// 	href: '/shop/product/plita-osb-3-250012506mm-kronospan-gost-vlagostoykaya',
		// 	unit: 'шт.'
		// },
		// {
		// 	id: '1487',
		// 	value: 'Керамзит мелкий (фракция 0-5 мм) 0,03 м3',
		// 	price: 196,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/kera.jpg',
		// 	href: '/shop/product/keramzit-melkii-frakciya-0-5-mm-004-m3',
		// 	unit: 'меш.'
		// },
		// {
		// 	id: '401',
		// 	value: 'Сетка сварная Ф3 50*50*1*0,5',
		// 	price: 61,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%81%D0%B5%D1%82%D0%BA%D0%B0.jpg',
		// 	href: '/shop/product/setka-svarnaya-f3-5050105',
		// 	unit: 'шт.'
		// },
		// {
		// 	id: '402',
		// 	value: 'Сетка сварная Ф3 50*50*2*0,5',
		// 	price: 117,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%81%D0%B5%D1%82%D0%BA%D0%B0.jpg',
		// 	href: '/shop/product/setka-svarnaya-f3-5050205',
		// 	unit: 'шт.'
		// },
		// {
		// 	id: '2946',
		// 	action: 'Плита осб-3 2500*1250*6мм Kronospan ГОСТ (влагостойкая)',
		// 	price: '532',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/plita-osb-3-250012506mm-kronospan-gost-vlagostoykaya',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/YBbav3JxXOKl8hYDTen6CzCa1TUlMBagzDxTXlFO.png'
		// },
		// {
		// 	id: '1543',
		// 	action: 'Гклв "Кнауф" даногипс 12,5мм (1,2х2,5)',
		// 	price: '423',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gklv-knauf-danogips-125mm-12x25',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lvfXJZnJe2ASRUHpI5X2dxVN30ZPHmVRFh0MDJyi.jpeg'
		// },
		// {
		// 	id: '1543',
		// 	action: 'ГКЛВ "Кнауф" ДАНОГИПС  9,5мм  (1,2х2,5)',
		// 	price: '430',
		// 	unit: 'шт',
		// 	description: 'При заказе через сайт дополнительная скидка 5%',
		// 	link: '/shop/product/gklv-knauf-danogips-95mm-12x25',
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/D2JsbwgeZcA0z4OLW242TuXbW5KFsDYQMR59VFSE.jpeg'
		// },
		// {
		// 	value: 'Cмесь для пола "Юнис" Горизонт универсальный (20 кг)',
		// 	price: 415,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%8E%D1%83.jpg',
		// 	href: '/shop/product/cmes-dlya-pola-yunis-gorizont-universalnyi-20-kg',
		// 	unit: 'шт.'
		// },
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
		// {
		// 	value: 'Краска водно-дисперсионная "Текс" Универсал влагостойкая (14 кг)',
		// 	price: 1412,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/eejGmEDwXOL1hZZoQ5W3kP14npEFvK49auJ3o1Nz.jpeg',
		// 	href: '/shop/product/kraska-vodno-dispersionnaya-teks-universal-vlagostoykaya-14-kg',
		// 	unit: 'шт.'
		// },
		// {
		// 	value:
		// 		'Клей для плитки и керамогранита "Церезит СМ 14 extra" для улицы и теплых полов (25 кг)',
		// 	price: 760,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%81%D0%BC14.jpg',
		// 	href: '/shop/product/klei-dlya-plitki-i-keramogranita-cerezit-sm-14-extra-dlya-ulicy-i-teplyx-polov-25-kg',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Клей для плитки Кнауф Флизенклебер (25 кг)',
		// 	price: 434,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%BB%D0%B8%D0%B7%D0%B5%D0%BD.webp',
		// 	href: '/shop/product/klei-dlya-plitki-knauf-flizenkleber-25-kg',
		// 	unit: 'меш.'
		// },
		// {
		// 	value: 'Керамзит крупный (фракция 10-20 мм) 0,04 м3',
		// 	price: 127,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/keramzit.jpg',
		// 	href: '/shop/product/keramzit-krupnyi-m350-samara-frakciya-10-20-mm-004-m3',
		// 	unit: 'меш.'
		// },
		// {
		// 	value: 'Бетоноконтакт ЕК 14кг',
		// 	price: 1304,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/17443.750x0.jpg',
		// 	href: '/shop/product/bietonokontakt-ie-k-14kgh',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Профиль потолочный "Кнауф" 60/27 толщ. 0,6 мм (3 м)',
		// 	price: 333,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/fP6qERpplBYG9CRXINoXc23B3VBR8wQoH6W80cGC.jpeg',
		// 	href: '/shop/product/profil-potolocnyi-knauf-6027-tolshh-06-mm-3-m',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Профиль направляющий "Кнауф" 27/28 толщ. 0,6 мм (3м)',
		// 	price: 228,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/6Ky8FHCrpmRRRnw3O6QjlKtjEZRGNAWl9VvKlI0h.jpeg',
		// 	href: '/shop/product/profil-napravlyayushhii-knauf-2728-tolshh-06-mm-3m',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Поликарбонат сотовый POLIPLAST ST4*2100*12000 прозрачный',
		// 	price: 5000,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/lSHy2nYTCubCyXeSrG38YM8CD4DPL88MeYQzrSSw.png',
		// 	href: '/shop/product/polikarbonat-sotovyi-prozracnyi-4mm',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Профлист С-10 1160*3000 Оцинкованный',
		// 	price: 1640,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/o233615480a6fded9690ecb346.jpg',
		// 	href: '/shop/product/profnastil-s-10-11602000-ocinkovannyi',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Рубероид РПП 300 (0)',
		// 	price: 525,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ruberoid-rpp-rkp-rkk.jpg',
		// 	href: '/shop/product/ruberoid-rpp-300-tu-texnonikol-15-m2',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Сетка рабица оц (1,8м*10м) 50*50*1,6',
		// 	price: 1484,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/rab.png',
		// 	href: '/shop/product/setka-rabica-ocinkovannaya-18m10m-yaceika-5050-d-16',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Сетка Сварная Ф5=3 100*100*2*0,5',
		// 	price: 58,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%81%D0%B5%D1%82%D0%BA%D0%B0.jpg',
		// 	href: '/shop/product/setka-svarnaya-f3-100100205',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Пескобетон М-300(25кг) "Престиж"',
		// 	price: 180,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/d2mCWYGA3dewlVi8teMhWz8wu9Zu2Vqsa7XsPtvk.jpeg',
		// 	href: '/shop/product/peskobeton-m-300-25kg-eso-prestiz',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Труба Д25 L-4м. с арм. стекловолокном серая',
		// 	price: 260,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/tVHD3KcfKSYJz41DxjXRGj7IDCGtgxZIVrYq5rAA.jpg',
		// 	href: '/shop/product/truba-d25-l-4m-s-arm-steklovoloknom-seraya',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'Элемент пола "Кнауф" 20мм (1,2х0,6) (0,72м2)',
		// 	price: 512,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%8D%D0%BB%20%D0%BF%D0%BE%D0%BB%D0%B0.jpg',
		// 	href: '/shop/product/element-pola-knauf-20-mm-1200600',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'ЭПП XPS30-200 Стандарт 1180*580*50-L(8шт./уп)',
		// 	price: 319,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png',
		// 	href: '/shop/product/epp-xps30-200-texnopleks-118058050-l',
		// 	unit: 'шт.'
		// },
		// {
		// 	value: 'ЭПП ХР30-200 Стандарт 1180*580*30-L (13шт/уп)',
		// 	price: 206,
		// 	img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png',
		// 	href: '/shop/product/epp-xps30-200-texnopleks-118058030-l',
		// 	unit: 'шт.'
		// },
	];

	return { discountProducts };
}
