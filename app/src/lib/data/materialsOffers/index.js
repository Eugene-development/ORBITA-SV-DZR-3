// Неотмеченные позиции из накладной №8281 от 30.09.26.
const materials = [
	{
		invoiceRow: 1,
		action: 'Штукатурная смесь ЕК TT 30 фасадная, 25 кг',
		price: '356',
		unit: 'меш',
		id: '434',
		link: '/shop/product/stukaturnaya-smes-ek-tt-30-fasadnaya-25-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TT30.png'
	},
	{
		invoiceRow: 2,
		action: 'Штукатурная смесь Кнауф Ротбанд белый Кубань, 30 кг',
		price: '545',
		unit: 'шт',
		id: '436',
		link: '/shop/product/stukaturnaya-smes-knauf-rotband-belaya-30-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/020_original.jpg'
	},
	{
		invoiceRow: 4,
		action: 'Клей для плитки ЕК 3000, 25 кг',
		price: '412',
		unit: 'меш',
		id: '267',
		link: '/shop/product/klei-dlya-plitki-ek-3000-25kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-3000-UNIVERSAL.png'
	},
	{
		invoiceRow: 6,
		action: 'Клей для плитки Ветонит Изи Фикс +, 25 кг',
		price: '422',
		unit: 'шт',
		id: '2786',
		link: '/shop/product/klei-dlya-plitki-izi-fiks-plyus',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/9WEhGW6ZUShIjPn67MQzYGfHpIT9dAxpOxae6iT8.png'
	},
	{
		invoiceRow: 7,
		action: 'Шпаклёвка Ветонит LR+, 20 кг',
		price: '998',
		unit: 'шт',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/shpaklevka-vetonit-lr-plus-20-kg.jpg'
	},
	{
		invoiceRow: 8,
		action: 'Шпаклёвка ЕК K 200, 20 кг',
		price: '498',
		unit: 'шт',
		id: '447',
		link: '/shop/product/spaklevka-gipsovaya-ek-k-200-20-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ek20025kg-500x500.jpg'
	},
	{
		invoiceRow: 9,
		action: 'Штукатурная смесь ЕК TG 40, 30 кг',
		price: '449.64',
		unit: 'меш',
		id: '431',
		link: '/shop/product/stukaturnaya-smes-ek-tg-40-30-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-TG40.png'
	},
	{
		invoiceRow: 10,
		action: 'Штукатурная смесь Ветонит TT 30 лайт, 25 кг',
		price: '335',
		unit: 'шт',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/shtukaturnaya-smes-vetonit-tt-30-light-25-kg.png'
	},
	{
		invoiceRow: 11,
		action: 'Штукатурная смесь Ветонит TT 40, 25 кг',
		price: '412',
		unit: 'шт',
		id: '1501',
		link: '/shop/product/stukaturnaya-smes-tt-40-vetonit-25-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/rXeE9qQsn7EpDT15h34D1bj0Y7tMalVrKb2vtm7w.jpeg'
	},
	{
		invoiceRow: 12,
		action: 'Профлист С-10 оцинкованный, 1160×2000 мм',
		price: '1092',
		unit: 'лист',
		id: '1015',
		link: '/shop/product/profnastil-s-10-11602000-ocinkovannyi',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/o233615480a6fded9690ecb346.jpg'
	},
	{
		invoiceRow: 13,
		action: 'Профлист С-10 оцинкованный, 1160×3000 мм',
		price: '1635',
		unit: 'шт',
		id: '1016',
		link: '/shop/product/profnastil-s-10-11603000-045-ocinkovannyi',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/o233615480a6fded9690ecb346.jpg'
	},
	{
		invoiceRow: 14,
		action: 'Пескобетон М-300 Престиж ECO, 25 кг',
		price: '172',
		unit: 'шт',
		id: '473',
		link: '/shop/product/peskobeton-m-300-25-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D0%BF%D0%B5%D1%81.jpg'
	},
	{
		invoiceRow: 15,
		action: 'Плита ОСБ-3 МУРОМ, 2500×1250×6 мм',
		price: '575',
		unit: 'шт',
		id: '2946',
		link: '/shop/product/plita-osb-3-250012506mm-kronospan-gost-vlagostoykaya',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/YBbav3JxXOKl8hYDTen6CzCa1TUlMBagzDxTXlFO.png'
	},
	{
		invoiceRow: 16,
		action: 'Плита ОСБ-3 Kronospan, 2500×1250×9 мм',
		price: '660',
		unit: 'шт',
		id: '228',
		link: '/shop/product/plita-osb-3-250012509mm-kronospan-gost-vlagostoikaya',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/ilejI7dCV3zr72h4VudvlNrQLKBgHsrYwKd1HoAL.jpeg'
	},
	{
		invoiceRow: 17,
		action: 'Плита тротуарная полимерпесчаная зелёная, 45×45×3 см',
		price: '265',
		unit: 'шт',
		id: '354',
		link: '/shop/product/plita-trotuarnaya-polimernopescanaya-cvet-zelenyi-koricnevyi-krasnyi',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/trotuarnaya-plitka-kompanii-tessera-foto.jpg'
	},
	{
		invoiceRow: 18,
		action: 'Профиль ПН 27/28, 3 м, толщина 0,5 мм',
		price: '111',
		unit: 'шт',
		id: '356',
		link: '/shop/product/profil-napravlyayushhii-2728-tolshh-05-mm-3-m',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/2728.jpg'
	},
	{
		invoiceRow: 19,
		action: 'Профиль ПН Кнауф, 27×28×3000 мм',
		price: '232',
		unit: 'шт',
		id: '2961',
		link: '/shop/product/knauf-profil-napravlaushii-27x28',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/profil-potolochnyj-napravlyayuschij-knauf-27h28-izomaxx-1000x1000.png'
	},
	{
		invoiceRow: 20,
		action: 'Профиль ПП Кнауф, 60/27, 3 м',
		price: '339',
		unit: 'шт',
		id: '1548',
		link: '/shop/product/profil-potolocnyi-knauf-6027-tolshh-06-mm-3-m',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/fP6qERpplBYG9CRXINoXc23B3VBR8wQoH6W80cGC.jpeg'
	},
	{
		invoiceRow: 21,
		action: 'Профиль ПП 60/27, 3 м',
		price: '157',
		unit: 'шт',
		id: '365',
		link: '/shop/product/profil-potolocnyi-6027-tolshh-05-mm-3-m',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/6027.jpg'
	},
	{
		invoiceRow: 22,
		action: 'Праймер битумный готовый Альфатехмаст, 20 л',
		price: '2226',
		unit: 'шт',
		id: '1415',
		link: '/shop/product/praimer-bitumnyi-gotovyi-alfatexmast-20-l',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/3295_praymer-bitumnyy-gotovyy-a.jpg'
	},
	{
		invoiceRow: 24,
		action: 'Грунтовка ЕК G100, 10 л',
		price: '980',
		unit: 'кан',
		id: '520',
		link: '/shop/product/gruntovka-universalnaya-koncentrirovannaya-ek-g100-10-l',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G100.png'
	},
	{
		invoiceRow: 25,
		action: 'Грунтовка ЕК G200, 10 л',
		price: '676',
		unit: 'кан',
		id: '522',
		link: '/shop/product/gruntovka-universalnaya-ek-g200-10-l',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/EK-G200.png'
	},
	{
		invoiceRow: 28,
		action: 'Клей для керамогранита Ветонит Гранит Фикс, 25 кг',
		price: '641',
		unit: 'шт',
		id: '1555',
		link: '/shop/product/klei-dlya-keramogranita-vetonit-granit-fiks-25-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/cjuEmWLbRA2D3EmcoEz0gvL5dZOu4RBO0bsVdOdf.jpeg'
	},
	{
		invoiceRow: 29,
		action: 'Клей для плитки Кнауф Флизенклебер, 25 кг',
		price: '461',
		unit: 'меш',
		id: '307',
		link: '/shop/product/klei-dlya-plitki-knauf-flizenkleber-25-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%BB%D0%B8%D0%B7%D0%B5%D0%BD.webp'
	},
	{
		invoiceRow: 30,
		action: 'Клей для плитки Юнис ПЛЮС, 25 кг',
		price: '588',
		unit: 'меш',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/kley-dlya-plitki-yunis-plus-25-kg.png'
	},
	{
		invoiceRow: 31,
		action: 'Клей для плитки Юнис 3000 MAX, 25 кг',
		price: '470',
		unit: 'шт',
		id: '2965',
		link: '/shop/product/kliei-dlia-plitki-iunis-3000-ma-kh-tolstosloinyi-25-kgh',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/0fc66aadfde42ad46846c2aa065c6c2a.jpg'
	},
	{
		invoiceRow: 32,
		action: 'Штукатурка цементная Юнис Силин универсальная армированная, 25 кг',
		price: '410',
		unit: 'шт',
		id: '2983',
		link: '/shop/product/shtukaturka-cementnaya-yunis-silin-univ-armir-25kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/jwzscn0qzr4tuqgsp5o1n4bbm9nki2j.jpg'
	},
	{
		invoiceRow: 33,
		action: 'Штукатурная смесь минеральная Церезит CT 35, короед 2,5 мм, 25 кг',
		price: '1225',
		unit: 'шт',
		id: '2075',
		link: '/shop/product/stukaturnaya-smes-st-35',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/hGIz35zZFRVuMASmVghNtnlN968MtwJZoRu9cNK2.jpg'
	},
	{
		invoiceRow: 34,
		action: 'Эмаль ПФ-115 Царицыно белая, 20 кг',
		price: '3500',
		unit: 'шт',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/emal-pf-115-caricyno-belaya-20-kg.jpg'
	},
	{
		invoiceRow: 35,
		action: 'Эмаль ПФ-115 Текс Оптимум светло-серая, 0,9 кг',
		price: '305',
		unit: 'шт',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/emal-pf-115-teks-optimum-svetlo-seraya-09-kg.png'
	},
	{
		invoiceRow: 36,
		action: 'Эмаль ПФ-115 Текс Оптимум тёмно-синяя, 1,9 кг',
		price: '644',
		unit: 'шт',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/emal-pf-115-teks-optimum-temno-sinyaya-19-kg.webp'
	},
	{
		invoiceRow: 37,
		action: 'ЭПП XPS30-200 Стандарт, 1180×580×30-L, 13 шт./уп.',
		price: '206',
		unit: 'шт',
		id: '964',
		link: '/shop/product/epp-xps30-200-texnopleks-118058030-l',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
	},
	{
		invoiceRow: 38,
		action: 'ЭПП XPS30-200 Стандарт, 1180×580×50-L, 8 шт./уп.',
		price: '302',
		unit: 'шт',
		id: '965',
		link: '/shop/product/epp-xps30-200-texnopleks-118058050-l',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/XPS-%D0%A2%D0%95%D0%A5%D0%9D%D0%9E%D0%9F%D0%9B%D0%95%D0%9A%D0%A1.png'
	},
	{
		invoiceRow: 39,
		action: 'ЭПП XPS30-200 Стандарт, 1200×600×20-L, 20 шт./уп.',
		price: '137',
		unit: 'шт',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/epp-xps30-200-standart-120060020-l.jpg'
	},
	{
		invoiceRow: 40,
		action: 'Утеплитель ИЗОВЕР Тёплые стены, 610×1000×50 мм, 6,1 м²',
		price: '1210',
		unit: 'шт',
		id: '1592',
		link: '/shop/product/uteplitel-izover-teplye-steny-610100050mm-61m2',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/LQXYYDf7e3zp4kGz2MJkP9CD8yflTDW5ECTFC1kB.jpeg'
	},
	{
		invoiceRow: 41,
		action: 'Утеплитель ИЗОВЕР Тёплые стены, 610×1000×100 мм, 3,05 м²',
		price: '1210',
		unit: 'шт',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/uteplitel-izover-teplye-steny-6101000100mm-305m2.jpg'
	},
	{
		invoiceRow: 42,
		action: 'Утеплитель Кнауф для КОТТЕДЖА Термо Плита 037A, 50 мм',
		price: '2496',
		unit: 'шт',
		id: '2769',
		link: '/shop/product/knauf-kottedz-teploknauf-termo-plita-037-1230x610x50-mm',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/7VuAqPtCB4tQsa0Y8DJvjqpPLwPR8PhUGyTRCiiw.png'
	},
	{
		invoiceRow: 43,
		action: 'Утеплитель Роклайт, 1,2×0,6×0,1 м, 4,32 м², 0,432 м³',
		price: '1880',
		unit: 'упак',
		id: '1662',
		link: '/shop/product/uteplitel-texnonikol-roklait-1200600100',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/whNvDxUcyWufgGuLY2WKRup2GuyM0aYoGGwBsZ3k.jpg'
	},
	{
		invoiceRow: 44,
		action: 'Утеплитель Техновент Стандарт, 1200×600×50 мм, 0,216 м³',
		price: '1474',
		unit: 'шт',
		id: '70',
		link: '/shop/product/uteplitel-texnovent-standart-120060050-mm-0216-m3',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D1%82.jpg'
	},
	{
		invoiceRow: 45,
		action: 'Утеплитель Техновент Стандарт, 1200×600×100 мм, 0,288 м³',
		price: '1474',
		unit: 'шт',
		id: '71',
		link: '/shop/product/uteplitel-texnovent-standart-1200600100-mm-0288-m3',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D1%82.jpg'
	},
	{
		invoiceRow: 46,
		action: 'Фанера 10 мм, сорт 3/4, 1,525×1,525 м',
		price: '1007',
		unit: 'лист',
		id: '235',
		link: '/shop/product/fanera-10mm-sort-34-15251525',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%B0%D0%BD%D0%B5%D1%80%D0%B0.jpg'
	},
	{
		invoiceRow: 47,
		action: 'Фольга алюминиевая 100 мкм, 12 кв. м',
		price: '1870',
		unit: 'шт',
		id: '89',
		link: '/shop/product/folga-alyuminievaya-100-mkm-12-kvm-rulon',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%84%D0%BE%D0%BB%D1%8C%D0%B3%D0%B0.jpg'
	},
	{
		invoiceRow: 48,
		action: 'Утеплитель Роклайт, 1,2×0,6×0,05 м, 5,76 м², 0,288 м³',
		price: '1180',
		unit: 'упак',
		id: '1661',
		link: '/shop/product/uteplitel-texnonikol-roklait-120060050',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/c2eHGTqI7cLLb0g8nf4vlbuB6KENnH59Ukii45om.jpg'
	},
	{
		invoiceRow: 49,
		action: 'Клей для плитки эластичный Церезит CM 16, 25 кг',
		price: '1320',
		unit: 'шт',
		id: '315',
		link: '/shop/product/klei-dlya-plitki-elasticnyi-cerezit-sm-16-25-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%81%D0%BC16.jpeg'
	},
	{
		invoiceRow: 50,
		action: 'Клей для плитки эластичный Церезит CM 16 белый, 25 кг',
		price: '1674',
		unit: 'шт',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/kley-dlya-plitki-cerezit-cm16-belyy-25-kg.webp'
	},
	{
		invoiceRow: 51,
		action: 'Клей для плитки эластичный Церезит CM 17, 25 кг',
		price: '2210',
		unit: 'шт',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/kley-dlya-plitki-cerezit-cm17-25-kg.webp'
	},
	{
		invoiceRow: 52,
		action: 'Штукатурная смесь фасадная Церезит DekorPlus, 2 мм, 25 кг',
		price: '886',
		unit: 'шт',
		id: '441',
		link: '/shop/product/stukaturnaya-smes-fasadnaya-dekor-plus-cerezit-25-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/Ceresit-%D0%A8%D1%82%D1%83%D0%BA%D0%B0%D1%82%D1%83%D1%80%D0%BA%D0%B0-%D1%84%D0%B0%D1%81%D0%B0%D0%B4%D0%BD%D0%B0%D1%8F-Ceresit-Decor-plus-25-%D0%BA%D0%B3.jpg'
	},
	{
		invoiceRow: 64,
		action: 'Утеплитель Техноблок Стандарт, 1,2×0,6×0,05 м, 0,288 м³',
		price: '1474',
		unit: 'упак',
		id: '69',
		link: '/shop/product/uteplitel-texnoblok-standart-120060050-mm-0288-m3',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/nt%5Byj%2Ckjr.jpg'
	},
	{
		invoiceRow: 65,
		action: 'Утеплитель Техноблок Стандарт, 1,2×0,6×0,1 м, 0,288 м³',
		price: '1474',
		unit: 'упак',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/uteplitel-tehnoblok-standart-1200600100mm-0288-m3.jpg'
	},
	{
		invoiceRow: 66,
		action: 'Цемент М500 Евроцемент Ц/А-П 42,5Н, 40 кг',
		price: '420',
		unit: 'шт',
		id: '2810',
		link: '/shop/product/cement-m500-evrocement-40-kg',
		img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/AdAW50jMkTFDo4nUhEaxZUdxUkShNu2kf6HS4cMo.png'
	}
];

const homeRows = [2, 4, 6, 8, 9, 14, 16, 20, 24, 29, 31, 32, 43, 46, 66];

export const homeProducts = homeRows.map((row) =>
	materials.find((item) => item.invoiceRow === row)
);

export const discountProducts = materials
	.filter((item) => !homeRows.includes(item.invoiceRow))
	.sort((a, b) => Number(Boolean(b.id)) - Number(Boolean(a.id)))
	.map(({ action, link, ...item }) => ({ ...item, value: action, href: link }));
